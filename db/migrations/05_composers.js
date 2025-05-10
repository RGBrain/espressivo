/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = (knex) => {
    return knex.schema.createTable("composers", (table) => {
      table.increments("composer_id").unsigned().primary()
      table.string("composer_first_name", 255)
      table.string("composer_last_name", 255).notNullable()
      table.string("composer_display_name", 255)     
      table.timestamps(true, true)
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => { console.log('composers table dropped')
    return knex.schema.dropTableIfExists("composers");
};
