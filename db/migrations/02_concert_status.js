/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable("concert_status", (table) => {
        table.increments("concert_status_id").unsigned().primary()
        table.string("concert_status_text", 255).notNullable()
        table.timestamps(true, true)
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => { console.log('concert_status table dropped')
    return knex.schema.dropTableIfExists("concert_status");
};
