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
      composer_id: 1,
      composer_first_name: "Joseph",
      composer_last_name: "Haydn",
      composer_display_name: "Haydn",
    },
    {
      composer_id: 2,
      composer_first_name: "Bela",
      composer_last_name: "Bartok",
      composer_display_name: "Bartok",
    },
    {
      composer_id: 3,
      composer_first_name: "Ludwig van",
      composer_last_name: "Beethoven",
      composer_display_name: "Beethoven",
    },
    {
      composer_id: 4,
      composer_first_name: "Wolfgang Amadeus",
      composer_last_name: "Mozart",
      composer_display_name: "Mozart",
    },
    {
      composer_id: 5,
      composer_first_name: "Antonio",
      composer_last_name: "Vivaldi",
      composer_display_name: "Vivaldi",
    },
    {
      composer_id: 6,
      composer_first_name: "George Frideric",
      composer_last_name: "Handel",
      composer_display_name: "Handel",
    },
    {
      composer_id: 7,
      composer_first_name: "Johann Sebastian",
      composer_last_name: "Bach",
      composer_display_name: "Bach",
    },
    {
      composer_id: 8,
      composer_first_name: "Adolphe",
      composer_last_name: "Adam",
      composer_display_name: "Adolphe Adam",
    },
    {
      composer_id: 9,
      composer_first_name: "Leroy",
      composer_last_name: "Anderson",
      composer_display_name: "Leroy Anderson",
    },
  ]);
};

// table.increments("composer_id").unsigned().primary()
//       table.string("composer_first_name", 255)
//       table.string("composer_last_name", 255).notNullable()
//       table.string("composer_display_name", 255)
