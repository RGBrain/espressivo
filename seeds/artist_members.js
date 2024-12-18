/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('artist_members').del()
  await knex('artist_members').insert([
    {
      artist_member_id: 1, 
      artist_member_name: 'Michael Hs', // Capitalize or all lowercase ????
      instrument_id: 1,
      artist_member_website: ''
    }, 
    {
      artist_member_id: 2, 
      artist_member_name: 'Peter Uls', // Capitalize or all lowercase ????
      instrument_id: 1,
      artist_member_website: ''
    }, 
    {
      artist_member_id: 3, 
      artist_member_name: 'Hilary Ts', // Capitalize or all lowercase ????
      instrument_id: 2,
      artist_member_website: ''
    }, 
    {
      artist_member_id: 4, 
      artist_member_name: 'Gerald Ls', // Capitalize or all lowercase ????
      instrument_id: 3,
      artist_member_website: ''
    }
    
  ]);
};

// table.increments("artist_member_id").unsigned().primary()
//       table.string("artist_member_name", 255).notNullable()  
//       table.integer("instrument_id")
//       table.string("artist_member_website", 255) // i don't think each artist_member should have a website, but i'll leave it in, just in case 