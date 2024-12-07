/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('instruments').del()
  await knex('instruments').insert([
    {
      instrument_id: 1, 
      instrument_text: 'violin'
    },  
    {
      instrument_id: 2, 
      instrument_text: 'viola'
    },  
    {
      instrument_id: 3, 
      instrument_text: 'cello'
    }
    
  ]);
};