const path = require("path");
const tableName = path.basename(__filename, ".js");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableName).del();
  await knex(tableName).insert([
    {
      img_artist_entity_id: 1,
      artist_entity_id: 1,
      artist_entity_img_filename: "artist_entity1.jpg",
    },
  ]);
};
