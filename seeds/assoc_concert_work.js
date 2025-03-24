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
      assoc_concert_work_id: 1,
      concert_id: 1,
      work_id: 1,
      order_no: 1,
    },
    {
      assoc_concert_work_id: 2,
      concert_id: 1,
      work_id: 2,
      order_no: 2,
    },
    {
      assoc_concert_work_id: 3,
      concert_id: 1,
      work_id: 3,
      order_no: 3,
    },
    {
      assoc_concert_work_id: 4,
      concert_id: 2,
      work_id: 4,
      order_no: 1,
    },
    {
      assoc_concert_work_id: 5,
      concert_id: 2,
      work_id: 5,
      order_no: 2,
    },
    {
      assoc_concert_work_id: 6,
      concert_id: 2,
      work_id: 6,
      order_no: 3,
    },
    {
      assoc_concert_work_id: 7,
      concert_id: 3,
      work_id: 7,
      order_no: 1,
    },
    {
      assoc_concert_work_id: 8,
      concert_id: 3,
      work_id: 8,
      order_no: 2,
    },
    {
      assoc_concert_work_id: 9,
      concert_id: 3,
      work_id: 9,
      order_no: 3,
    },
    {
      assoc_concert_work_id: 10,
      concert_id: 3,
      work_id: 10,
      order_no: 4,
    },
    {
      assoc_concert_work_id: 11,
      concert_id: 3,
      work_id: 11,
      order_no: 5,
    },
    {
      assoc_concert_work_id: 12,
      concert_id: 3,
      work_id: 12,
      order_no: 6,
    },
  ]);
};

// table.increments("assoc_concert_work_id").unsigned().primary()
//       table.integer("concert_id").notNullable()
//       table.integer("work_id").notNullable()
//       table.integer("order_no")  //  required, of course, needed
