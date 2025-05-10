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
      box_office_id: 1, 
      box_office_name: 'Hellens',
      box_office_phone_number: '',
      box_office_website: 'hellensmanor.com'  // do i store the http/https on the db as well!!! (I guess so...)
    }, 
    {
      box_office_id: 2, 
      box_office_name: 'The Courtyard',
      box_office_phone_number: '01432 340555',
      box_office_website: 'www.courtyard.org.uk'  // do i store the http/https on the db as well!!! (I guess so...)
    }
  ]);
};

// table.increments("box_office_id").unsigned().primary()
//       table.string("box_office_name", 255).notNullable()
//       table.string("box_office_phone_number", 255)  // GENERIC INFO FOR THE BOX OFFICE 
//       table.string("box_office_website", 255)  // GENERIC INFO FOR THE BOX OFFICE 