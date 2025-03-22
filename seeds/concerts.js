/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("concerts").del();
  await knex("concerts").insert([
    {
      concert_id: 1,
      concert_datetime: "2025-09-30 19:30:00",
      concert_title: " ",
      artist_entity_id: 1,
      venue_id: 1,
      concert_overview: "Espressivo is delighted to have engaged the superb Engegard Quartet from Norway to give two concerts in Herefordshire as part of their UK tour on Saturday 30 September and Sunday 1 October 2023.",
      concert_fee: "£18 (students free)",
      concert_fee_more_info: "",
      concert_status_id: 1,
      concert_book_tickets_link: "http://braintelemarketing.com",
    },
    {
      concert_id: 2,
      concert_datetime: "2024-10-01 15:00:00",
      concert_title: " ",
      artist_entity_id: 2,
      venue_id: 2,
      concert_fee: "£15 (students £10)",
      concert_fee_more_info: "",
      concert_status_id: 3,
      concert_book_tickets_link: "http://braintelemarketing.com",
    },
  ]);
};

// table.increments("concert_id").unsigned().primary()
// table.datetime("concert_datetime").notNullable()
// table.string('concert_title', 255) // optional - i guess is usuall NULL - i considered putting concert title in another table to be more normalized and not have NULL values, but it is just more hassle to do that maybe
// table.integer('artist_entity_id').unsigned().notNullable()
// table.integer('venue_id').unsigned().notNullable()
// table.string('concert_fee', 255).notNullable()
// table.string('concert_fee_more_info', 1000)
// table.integer('concert_status_id').unsigned()
// table.foreign('artist_entity_id').references('artist_entities.artist_entity_id')
// table.foreign('venue_id').references('venues.venue_id')
// table.foreign('concert_status_id').references('concert_status.concert_status_id')
// table.timestamps(true, true)
