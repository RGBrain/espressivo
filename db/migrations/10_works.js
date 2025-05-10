/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = (knex) => {
    return knex.schema.createTable("works", (table) => {
      table.increments("work_id").unsigned().primary()
      table.integer("composer_id").unsigned().notNullable()
      table.string("work_title", 500).notNullable()
      //  table.foreign('composer_id').references('composers.composer_id')
      table.timestamps(true, true)
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => { console.log('works table dropped')
    return knex.schema.dropTableIfExists("works");
};
