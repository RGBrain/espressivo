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
      img_venue_id: 1, 
      venue_id: 1,
      img_filename: 'venue1.jpg'
    }
    
  ]);
};