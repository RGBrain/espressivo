/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = (knex) => {
    return knex.schema.createTable("img_venue", (table) => {
      table.increments("img_venue_id").unsigned().primary()
      table.integer("venue_id").notNullable().unsigned()  
      table.string("img_filename", 255).notNullable()
      //  table.foreign('venue_id').references('venues.venue_id')
      table.timestamps(true, true)
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => { console.log('img_venue table dropped')
    return knex.schema.dropTableIfExists("img_venue");
};
