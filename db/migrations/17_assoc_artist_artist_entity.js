/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = (knex) => {
    return knex.schema.createTable("assoc_artist_artist_entity", (table) => {
      table.increments("assoc_artist_artist_entity_id").unsigned().primary()
      table.integer('artist_id').unsigned().notNullable()
      table.integer('artist_entity_id').unsigned().notNullable()
      table.integer('order_no').unsigned()  //  this maybe necessary, in case one of the "artists" in an entity should be in 1st place, or more importance, or to just be listed first
      //  table.foreign('artist_id').references('artists.artist_id')
      //  table.foreign('artist_entity_id').references('artist_entities.artist_entity_id')
      table.timestamps(true, true)
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => { console.log('assoc_artist_artist_entity table dropped')
    return knex.schema.dropTableIfExists("assoc_artist_artist_entity");
};
