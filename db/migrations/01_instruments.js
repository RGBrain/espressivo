/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = (knex) => {
    return knex.schema.createTable("instruments", (table) => {
      table.increments("instrument_id").unsigned().primary()
      table.string("instrument_text", 255).notNullable()  
      table.timestamps(true, true)
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => { console.log('instruments table dropped')
    return knex.schema.dropTableIfExists("instruments");
};
