/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = (knex) => {
    return knex.schema.createTable("artist_entities", (table) => {
      table.increments("artist_entity_id").unsigned().primary()
      table.string("artist_entity_name", 255).notNullable()   // need this, otherwise it is just an artist_entity_id with no other columns populated at all
      table.string("artist_entity_website", 255)
      table.timestamps(true, true)
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => { console.log('artist_entities table dropped')
    return knex.schema.dropTableIfExists("artist_entities");
};
