const path = require('path')
const tableName = path.basename(__filename, '.js')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex(tableName).del()
  await knex(tableName).insert([
    {
      concert_grouping_id: 1, 
      concert_grouping_title: 'Two grouped concerts',
      concert_grouping_text: 'A journey over these composers'
    }
  ]);
};

// table.increments("concert_grouping_id").unsigned().primary()
//       table.string("concert_grouping_title", 255)
//       table.string("concert_grouping_text", 2500) 