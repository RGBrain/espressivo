/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('artist_entities').del()
  await knex('artist_entities').insert([
    {
      artist_entity_id: 1, 
      artist_entity_name: 'Enge Quartet',
      artist_entity_website: ''
    }
    
  ]);
};

// table.increments("artist_entity_id").unsigned().primary()
// table.string("artist_entity_name", 255).notNullable()   // need this, otherwise it is just an artist_entity_id with no other columns populated at all
// table.string("artist_entity_website", 255)