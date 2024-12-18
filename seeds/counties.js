/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('counties').del()
  await knex('counties').insert([
    {
      county_id: 1, 
      county_name: 'Herefordshire'
    }
    
  ]);
};