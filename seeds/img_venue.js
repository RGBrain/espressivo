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
      img_venue_id: 1,
      venue_id: 1,
      venue_img_filename: "hellens.jpg",
    },
    {
      img_venue_id: 2,
      venue_id: 2,
      venue_img_filename: "lion_ballroom.jpg",
    },
    {
      img_venue_id: 3,
      venue_id: 3,
      venue_img_filename: "berkeley_castle.jpg",
    },
  ]);
};
