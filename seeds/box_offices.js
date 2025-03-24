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
      box_office_id: 1,
      box_office_name: "Leominster TIC",
      box_office_phone_number: "01568 616460",
      box_office_website: "", // do i store the http/https on the db as well!!! (I guess so...)
    },
    {
      box_office_id: 2,
      box_office_name: "The Courtyard, Hereford",
      box_office_phone_number: "01432 340555",
      box_office_website: "https://www.courtyard.org.uk", // do i store the http/https on the db as well!!! (I guess so...)
    },
    {
      box_office_id: 3,
      box_office_name: "Roses Theatre",
      box_office_phone_number: "01684 295074",
      box_office_website: "https://www.rosestheatre.org", // do i store the http/https on the db as well!!! (I guess so...)
    },
  ]);
};

// table.increments("box_office_id").unsigned().primary()
//       table.string("box_office_name", 255).notNullable()
//       table.string("box_office_phone_number", 255)  // GENERIC INFO FOR THE BOX OFFICE
//       table.string("box_office_website", 255)  // GENERIC INFO FOR THE BOX OFFICE
