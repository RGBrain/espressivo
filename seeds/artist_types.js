/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('artist_types').del()
  await knex('artist_types').insert([
    {
      artist_type_id: 1, 
      artist_type_text: 'string quartet', // Capitalize or all lowercase ????
    }
    
  ]);
};