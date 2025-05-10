/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = (knex) => {
    return knex.schema.createTable("counties", (table) => {
      table.increments("county_id").unsigned().primary()
      table.string("county_name", 255).notNullable()
      table.timestamps(true, true)
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => { console.log('counties table dropped')
    return knex.schema.dropTableIfExists("counties");
};

