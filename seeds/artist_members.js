/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("artist_members").del();
  await knex("artist_members").insert([
    {
      artist_member_id: 1,
      artist_member_name: "Arvid Engegård", // Capitalize or all lowercase ????
      instrument_id: 1,
      artist_member_website: "",
    },
    {
      artist_member_id: 2,
      artist_member_name: "Laura Custodio Sabas", // Capitalize or all lowercase ????
      instrument_id: 1,
      artist_member_website: "",
    },
    {
      artist_member_id: 3,
      artist_member_name: "Juliet Jopling", // Capitalize or all lowercase ????
      instrument_id: 2,
      artist_member_website: "",
    },
    {
      artist_member_id: 4,
      artist_member_name: "Jan Clemens Carlsen", // Capitalize or all lowercase ????
      instrument_id: 3,
      artist_member_website: "",
    },
  ]);
};

// table.increments("artist_member_id").unsigned().primary()
//       table.string("artist_member_name", 255).notNullable()
//       table.integer("instrument_id")
//       table.string("artist_member_website", 255) // i don't think each artist_member should have a website, but i'll leave it in, just in case
