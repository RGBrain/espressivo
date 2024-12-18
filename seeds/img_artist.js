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
      img_artist_id: 1,
      artist_id: 1,
      artist_img_filename: "artist1.jpg",
    },
  ]);
};

// table.increments("img_artist_id").unsigned().primary()
//       table.integer("artist_id").notNullable().unsigned()
//       table.string("img_filename", 255).notNullable()
