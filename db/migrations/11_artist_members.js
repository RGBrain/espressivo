/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = (knex) => {
    return knex.schema.createTable("artist_members", (table) => {
      table.increments("artist_member_id").unsigned().primary()
      table.string("artist_member_name", 255).notNullable()  
      table.integer("instrument_id").unsigned().notNullable()
      table.string("artist_member_website", 255) // i don't think each artist_member should have a website, but i'll leave it in, just in case 
      // table.foreign('instrument_id').references('instruments.instrument_id')
      table.timestamps(true, true)
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => { console.log('artist_members table dropped')
    return knex.schema.dropTableIfExists("artist_members");
};
