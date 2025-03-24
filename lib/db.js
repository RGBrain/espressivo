import knex from "knex";
import {
  in_object_make_any_empty_string_values_to_be_null_instead_and_return_new_object,
  sort_object_by_key_alphabetically_and_return_sorted_object,
} from "./utils";

export const db = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  migrations: {
    directory: "./db/migrations",
  },
});

export const raw = async (sql, bindings = "") => {
  if (bindings.length === 0) {
    bindings = undefined;
  }
  const result = await db.raw(sql, bindings);
  const data = result[0];
  const parsed = JSON.parse(JSON.stringify(data));
  return parsed.length === 1 ? parsed[0] : parsed;
};

export const getConcertDataForNextConcert = async () => {
  let sql_result = await raw(
    "SELECT concert_id FROM concerts WHERE concert_datetime > NOW() ORDER BY concert_datetime ASC LIMIT 1",
  );

  let concert_id_of_next_concert = sql_result.concert_id;
  let concertData = await getConcertDataForThisConcertId(
    concert_id_of_next_concert,
  );
  return concertData;
};

export const getConcertDataForAllFutureConcerts = async () => {
  let sql_result = await raw(
    "SELECT concert_id FROM concerts WHERE concert_datetime > NOW() ORDER BY concert_datetime ASC",
  );

  let arrayOfConcertIds = [];
  let arrayOfAllFutureConcertData = [];
  let iter_concertData;

  // sql_result may be an array of objects (>1 future concert)  OR just an object (just 1 future concert)
  if (Array.isArray(sql_result)) {
    // i.e. there is > 1 future concert
    for (var obj of sql_result) {
      arrayOfConcertIds.push(obj["concert_id"]);
    }
  } else {
    // i.e. there is one future concert
    arrayOfConcertIds.push(sql_result["concert_id"]);
  }

  for (var concert_id of arrayOfConcertIds) {
    iter_concertData = await getConcertDataForThisConcertId(concert_id);
    arrayOfAllFutureConcertData.push(iter_concertData);
  }

  return arrayOfAllFutureConcertData; // NOTE: this function ALWAYS returns an array, even if just one future concert
};

export const getConcertDataForAllPastConcerts = async () => {
  let sql_result = await raw(
    "SELECT concert_id FROM concerts WHERE concert_datetime < NOW() ORDER BY concert_datetime DESC",
  );

  let arrayOfConcertIds = [];
  let arrayOfAllFutureConcertData = [];
  let iter_concertData;

  // sql_result may be an array of objects (>1 future concert)  OR just an object (just 1 future concert)
  if (Array.isArray(sql_result)) {
    // i.e. there is > 1 future concert
    for (var obj of sql_result) {
      arrayOfConcertIds.push(obj["concert_id"]);
    }
  } else {
    // i.e. there is one future concert
    arrayOfConcertIds.push(sql_result["concert_id"]);
  }

  for (var concert_id of arrayOfConcertIds) {
    iter_concertData = await getConcertDataForThisConcertId(concert_id);
    arrayOfAllFutureConcertData.push(iter_concertData);
  }

  return arrayOfAllFutureConcertData; // NOTE: this function ALWAYS returns an array, even if just one future concert
};

export const getConcertDataForThisConcertId = async (concert_id) => {
  let concertData = await raw(
    `SELECT *, UNIX_TIMESTAMP(concert_datetime) AS concert_timestamp FROM concerts INNER JOIN concert_status USING (concert_status_id) INNER JOIN venues USING (venue_id) INNER JOIN counties USING (county_id) INNER JOIN artist_entities USING (artist_entity_id) LEFT JOIN img_concert USING (concert_id) LEFT JOIN img_venue USING (venue_id) LEFT JOIN img_artist_entity USING (artist_entity_id) WHERE concerts.concert_id = ${concert_id} LIMIT 1;`,
  );

  // deleting unneeded properties, mostly id numbers
  delete concertData.created_at;
  delete concertData.updated_at;
  delete concertData.concert_datetime;
  delete concertData.img_concert_id;
  delete concertData.img_venue_id;
  delete concertData.img_artist_entity_id;
  delete concertData.county_id;
  delete concertData.venue_id;
  delete concertData.concert_status_id;

  // rename object key:
  concertData["venue_county"] = concertData["county_name"];
  delete concertData["county_name"];

  concertData =
    in_object_make_any_empty_string_values_to_be_null_instead_and_return_new_object(
      concertData,
    );

  //  GETTING WORKS FOR CONCERT... (a concert usually has works)
  let worksData = await raw(
    `SELECT works.work_title, composers.composer_first_name, composers.composer_last_name, composers.composer_display_name FROM assoc_concert_work INNER JOIN works USING (work_id) INNER JOIN composers USING (composer_id) WHERE concert_id = ${concertData.concert_id} ORDER BY assoc_concert_work.order_no ASC`,
  );

  concertData["concert_works"] = worksData;

  //  GETTING ARTIST MEMBERS NAMES AND INSTRUMENTS FOR CONCERT...

  const artistMembers = []; // initially creating empty artist_members array of objects

  let sql_result_artists = await raw(
    `SELECT assoc_artist_artist_entity.artist_id FROM assoc_artist_artist_entity INNER JOIN artists USING (artist_id) INNER JOIN artist_types USING (artist_type_id) INNER JOIN artist_entities USING (artist_entity_id) WHERE assoc_artist_artist_entity.artist_entity_id = ${concertData.artist_entity_id} ORDER BY assoc_artist_artist_entity.order_no ASC`,
  ); // this SQL query is quite indepth, so that other artist properties will maybe be available if needed

  let arrayOfArtistIds = [];

  if (Array.isArray(sql_result_artists)) {
    // i.e. there is > 1 artist (in assoc_artist_artist_entities table) for this artist_entity
    for (var obj of sql_result_artists) {
      arrayOfArtistIds.push(obj["artist_id"]);
    }
  } else {
    // i.e. there is one artist (in assoc_artist_artist_entities table) for this artist_entity
    arrayOfArtistIds.push(sql_result_artists["artist_id"]);
  }

  for (var artist_id of arrayOfArtistIds) {
    // iter_concertData = await getConcertDataForThisConcertId(concert_id);
    // arrayOfAllFutureConcertData.push(iter_concertData);

    let artistMembersData = await raw(
      `SELECT artist_members.artist_member_name, instruments.instrument_text FROM assoc_artist_artist_member INNER JOIN artists USING (artist_id) INNER JOIN artist_members USING (artist_member_id) INNER JOIN instruments USING (instrument_id) WHERE assoc_artist_artist_member.artist_id = ${artist_id} ORDER BY assoc_artist_artist_member.order_no ASC`,
    );

    let artistMemberObject;

    if (Array.isArray(artistMembersData)) {
      // i.e. there is > 1 artist_member (in assoc_artist_artist_members table) for this artist table entry
      for (var obj of artistMembersData) {
        artistMemberObject = {
          artist_member_name: obj["artist_member_name"],
          instrument_name: obj["instrument_text"],
        };

        artistMembers.push(artistMemberObject);
        // arrayOfArtistIds.push(obj["artist_id"]);
        // artist_members
      }
    } else {
      // i.e. there is one artist member (in assoc_artist_artist_members table) for this artist

      artistMemberObject = {
        artist_member_name: artistMembersData["artist_member_name"],
        instrument_name: artistMembersData["instrument_text"],
      };

      artistMembers.push(artistMemberObject);
    }
  } // end of for (var artist_id)  // looping each artist in artists table

  concertData["artist_members"] = artistMembers;

  // no longer need this artist_entity_id in concertData object?
  delete concertData.artist_entity_id;

  // END OF GETTING ARTIST MEMBERS NAMES AND INSTRUMENTS FOR CONCERT...

  // START OF - GET BOX OFFICES DATA FOR CONCERT

  const boxOfficeData = []; // initially creating empty boxOfficeData array of objects

  let sql_result_box_offices = await raw(
    `SELECT box_offices.box_office_name, assoc_box_office_concert.box_office_phone_number, assoc_box_office_concert.box_office_website_link FROM assoc_box_office_concert INNER JOIN box_offices USING (box_office_id) WHERE assoc_box_office_concert.concert_id = ${concert_id} ORDER BY assoc_box_office_concert.order_no ASC`,
  );

  let boxOfficeObject;

  if (Array.isArray(sql_result_box_offices)) {
    // i.e. there is > 1 artist_member (in assoc_artist_artist_members table) for this artist table entry
    for (var obj of sql_result_box_offices) {
      boxOfficeObject = {
        box_office_name: obj["box_office_name"],
        box_office_phone_number: obj["box_office_phone_number"],
        box_office_website_link: obj["box_office_website_link"],
      };

      boxOfficeData.push(boxOfficeObject);
      // arrayOfArtistIds.push(obj["artist_id"]);
      // artist_members
    }
  } else {
    // i.e. there is one artist member (in assoc_artist_artist_members table) for this artist

    boxOfficeObject = {
      box_office_name: sql_result_box_offices["box_office_name"],
      box_office_phone_number:
        sql_result_box_offices["box_office_phone_number"],
      box_office_website_link:
        sql_result_box_offices["box_office_website_link"],
    };

    boxOfficeData.push(boxOfficeObject);
  }

  concertData["box_office_info"] = boxOfficeData;

  // END OF - GET BOX OFFICES DATA FOR CONCERT

  // make concertData properties alphabetical
  concertData =
    sort_object_by_key_alphabetically_and_return_sorted_object(concertData);

  return concertData;
};
