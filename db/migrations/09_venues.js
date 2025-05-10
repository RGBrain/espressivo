/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = (knex) => {
    return knex.schema.createTable("venues", (table) => {
      table.increments("venue_id").unsigned().primary()
      table.string("venue_name", 255).notNullable()
      table.string("venue_email", 255)
      table.string("venue_phone_number", 255)
      table.string("venue_website", 255)
      table.string("venue_address_line1", 255)
      table.string("venue_address_line2", 255)
      table.string("venue_town", 255)
      table.string("venue_city", 255)
      table.integer('county_id').unsigned().notNullable()
      table.string("venue_postcode", 50)
      // table.foreign('county_id').references('counties.county_id')
      table.timestamps(true, true)
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => { console.log('venues table dropped')
    return knex.schema.dropTableIfExists("venues");
};
