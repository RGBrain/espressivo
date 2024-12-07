/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('venues').del()
  await knex('venues').insert([
    {
      venue_id: 1, 
      venue_name: 'Hellens',
      venue_email: '',
      venue_phone_number: '',
      venue_website: 'hellensmanor.com',  // i am guessing... 
      venue_address_line1: '',
      venue_address_line2: '',
      venue_town: 'Much Marcle',
      venue_city: '',
      county_id: 1,
      venue_postcode: 'HR8'
    }, 
    {
      venue_id: 2, 
      venue_name: 'Lion Ballroom',
      venue_email: '',
      venue_phone_number: '',
      venue_website: 'lionballroom.com',  // i am guessing... 
      venue_address_line1: '',
      venue_address_line2: '',
      venue_town: 'Leominster',
      venue_city: '',
      county_id: 1,
      venue_postcode: 'HR8'
    }
    
  ]);
};

// table.increments("venue_id").unsigned().primary()
// table.string("venue_name", 255).notNullable()
// table.string("venue_email", 255)
// table.string("venue_phone_number", 255)
// table.string("venue_website", 255)
// table.string("venue_address_line1", 255)
// table.string("venue_address_line2", 255)
// table.string("venue_town", 255)
// table.string("venue_city", 255)
// table.string("venue_postcode", 50)
// table.integer('county_id').unsigned().notNullable()