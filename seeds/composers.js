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
      composer_id: 1, 
      composer_first_name: 'Joseph',
      composer_last_name: 'Haydn',
      composer_display_name: ''
    }, 
    {
      composer_id: 2, 
      composer_first_name: 'Bela',
      composer_last_name: 'Bartok',
      composer_display_name: ''
    }, 
    {
      composer_id: 3, 
      composer_first_name: 'Ludwig van',
      composer_last_name: 'Beethoven',
      composer_display_name: ''
    }
  ]);
};

// table.increments("composer_id").unsigned().primary()
//       table.string("composer_first_name", 255)
//       table.string("composer_last_name", 255).notNullable()
//       table.string("composer_display_name", 255)  