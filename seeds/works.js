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
      work_id: 1,
      composer_id: 1,
      work_title: "String Quartet in B flat Op 76 No 4 (Sunrise)",
    },
    {
      work_id: 2,
      composer_id: 2,
      work_title: "String Quartet No 3",
    },
    {
      work_id: 3,
      composer_id: 3,
      work_title: "String Quartet in C Op 59 No 3 (Razumovsky)",
    },
    {
      work_id: 4,
      composer_id: 4,
      work_title: "Serenade No.10 in B flat K361",
    },
    {
      work_id: 5,
      composer_id: 4,
      work_title: "Divertimento No.3 in E flat K166",
    },
    {
      work_id: 6,
      composer_id: 4,
      work_title: "Serenade No.11 in E flat K375",
    },
    {
      work_id: 7,
      composer_id: 5,
      work_title: "‘Winter’ from The Four Seasons",
    },
    {
      work_id: 8,
      composer_id: 4,
      work_title: "Clarinet Concerto in A K622",
    },
    {
      work_id: 9,
      composer_id: 6,
      work_title: "Pastoral Symphony from Messiah",
    },
    {
      work_id: 10,
      composer_id: 7,
      work_title: "Brandenburg Concerto No 6 in B flat",
    },
    {
      work_id: 11,
      composer_id: 8,
      work_title: "O Holy Night",
    },
    {
      work_id: 12,
      composer_id: 9,
      work_title: "Sleigh Ride",
    },
  ]);
};

// table.increments("work_id").unsigned().primary()
//       table.integer("composer_id").notNullable()
//       table.string("work_title", 500).notNullable()
