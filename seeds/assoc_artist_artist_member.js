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
      assoc_artist_artist_member_id: 1, 
      artist_id: 1,
      artist_member_id: 1,
      order_no: 1
    },
    {
      assoc_artist_artist_member_id: 2, 
      artist_id: 1,
      artist_member_id: 2,
      order_no: 2
    },
    {
      assoc_artist_artist_member_id: 3, 
      artist_id: 1,
      artist_member_id: 3,
      order_no: 3
    },
    {
      assoc_artist_artist_member_id: 4, 
      artist_id: 1,
      artist_member_id: 4,
      order_no: 4
    }
  ]);
};

// table.increments("assoc_artist_artist_member_id").unsigned().primary()
//       table.integer("artist_id").notNullable().unsigned()  
//       table.integer("artist_member_id").notNullable().unsigned()
//       table.integer('order_no').unsigned()