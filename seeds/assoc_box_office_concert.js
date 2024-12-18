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
      assoc_box_office_concert_id: 1, 
      box_office_id: 1,
      concert_id: 1,
      box_office_phone_number: '',  // NULL 
      box_office_website_link: 'www.hellensmanor.com', // i guess there is a more specific link than this though... 
      order_no: 1
    },
    {
      assoc_box_office_concert_id: 2, 
      box_office_id: 2,
      concert_id: 1,
      box_office_phone_number: '01432 340555',  
      box_office_website_link: 'www.courtyard.org.uk', // i guess there is a more specific link than this though... 
      order_no: 1
    }
  ])
};


// table.increments("assoc_box_office_concert_id").unsigned().primary()
//       table.integer("concert_id").notNullable()
//       table.integer("box_office_id").notNullable()
//       table.string("box_office_phone_number", 255)  // phone number is best here, in case box office number changes from time to time, and it's more accurate record in here 
//       table.string("box_office_website_link", 255)
//       table.integer("order_no") 