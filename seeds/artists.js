/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('artists').del()
  await knex('artists').insert([
    {
      artist_id: 1, 
      artist_name: 'Enge Quartet',
      artist_website: '',
      artist_type_id: 1
    }
    
  ]);
};

// table.increments("artist_id").unsigned().primary()
// table.string("artist_name", 255).notNullable() // e.g.  'Rosamunde Piano Trio'  or  'Mark Bebbington'  - note that  'Mark Bebbington' would still have an artist_member record,  assoc to this artist_id.  There may be duplication but that is fine!!!! 
// table.string("artist_website", 255)
// table.integer("artist_type_id")