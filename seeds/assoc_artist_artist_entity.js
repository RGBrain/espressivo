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
      assoc_artist_artist_entity_id: 1, 
      artist_id: 1,
      artist_entity_id: 1,
      order_no: 1
    }
  ]);
};

// table.increments("assoc_artist_artist_entity_id").unsigned().primary()
// table.integer('artist_id').unsigned().notNullable()
// table.integer('artist_entity_id').unsigned().notNullable()
// table.integer('order_no').unsigned() 