/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = (knex) => {
    return knex.schema.createTable("img_concert", (table) => {
      table.increments("img_concert_id").unsigned().primary()
      table.integer("concert_id").notNullable().unsigned()  
      table.string("img_filename", 255).notNullable()
      //  table.foreign('concert_id').references('concerts.concert_id')
      table.timestamps(true, true)
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => { console.log('img_concert table dropped')
    return knex.schema.dropTableIfExists("img_concert");
};
