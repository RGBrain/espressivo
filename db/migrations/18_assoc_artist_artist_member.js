/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = (knex) => {
    return knex.schema.createTable("assoc_artist_artist_member", (table) => {
      table.increments("assoc_artist_artist_member_id").unsigned().primary()
      table.integer("artist_id").notNullable().unsigned()  
      table.integer("artist_member_id").notNullable().unsigned()
      table.integer('order_no').unsigned()  //  This is necessary, in case one of the "artist member" should be in 1st place, or more importance, or to just be listed first,  e.g   '1st violin' in a string quartet, should be order_no.   Do not rely merely on assoc_artist_artist_member_id ASC, a bit crude and inflexible that would be ... 
      //  table.foreign('artist_id').references('artists.artist_id')
      //  table.foreign('artist_member_id').references('artist_members.artist_member_id')
      table.timestamps(true, true)
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => { console.log('assoc_artist_artist_member table dropped')
    return knex.schema.dropTableIfExists("assoc_artist_artist_member");
};
