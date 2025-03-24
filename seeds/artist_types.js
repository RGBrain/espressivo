/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("artist_types").del();
  await knex("artist_types").insert([
    {
      artist_type_id: 1,
      artist_type_text: "string quartet", // Capitalize or all lowercase ?
    },
    {
      artist_type_id: 2,
      artist_type_text: "wind ensemble", // Capitalize or all lowercase ?
    },
    {
      artist_type_id: 3,
      artist_type_text: "string orchestra", // Capitalize or all lowercase ?
    },
  ]);
};
