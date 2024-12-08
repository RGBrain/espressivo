import knex from "knex";
import { in_object_make_any_empty_strings_to_be_null_instead_and_return_new_object, sort_object_by_key_alphabetically_and_return_sorted_object } from "./utils";

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

export const getNextConcertData = async () => {
  let concertData = await raw(
    "SELECT *, DATE_FORMAT(concerts.concert_datetime, '%W %e %M %Y %l.%i%p') AS concert_datetime_full, DATE_FORMAT(concerts.concert_datetime, '%a %e %b %Y %l.%i%p') AS concert_datetime_abbreviated, DATE_FORMAT(concerts.concert_datetime, '%a %e %b %l.%i%p') AS concert_datetime_abbreviated_no_year FROM concerts INNER JOIN concert_status USING (concert_status_id) INNER JOIN venues USING (venue_id) INNER JOIN counties USING (county_id) INNER JOIN artist_entities USING (artist_entity_id) LEFT JOIN img_concert USING (concert_id) LEFT JOIN img_venue USING (venue_id) LEFT JOIN img_artist_entity USING (artist_entity_id) ORDER BY concerts.concert_datetime ASC LIMIT 1;"
  );

  // deleting unneeded properties
  delete concertData.created_at;
  delete concertData.updated_at;
  delete concertData.concert_datetime;
  delete concertData.img_concert_id;
  delete concertData.img_venue_id;
  delete concertData.img_artist_entity_id;

  concertData = in_object_make_any_empty_strings_to_be_null_instead_and_return_new_object(concertData);

  concertData = sort_object_by_key_alphabetically_and_return_sorted_object(concertData);

  return concertData;
};
