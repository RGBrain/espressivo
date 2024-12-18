/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = (knex) => {
    return knex.schema.createTable("artists", (table) => {
      table.increments("artist_id").unsigned().primary()
      table.string("artist_name", 255).notNullable() // e.g.  'Rosamunde Piano Trio'  or  'Mark Bebbington'  - note that  'Mark Bebbington' would still have an artist_member record,  assoc to this artist_id.  There may be duplication but that is fine!!!! 
      table.string("artist_website", 255)
      table.integer("artist_type_id").unsigned().notNullable()
      //  table.foreign('artist_type_id').references('artist_types.artist_type_id')
      table.timestamps(true, true)
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => { console.log('artists table dropped')
    return knex.schema.dropTableIfExists("artists");
};
