/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = (knex) => {
    return knex.schema.createTable("assoc_concert_work", (table) => {
      table.increments("assoc_concert_work_id").unsigned().primary()
      table.integer("concert_id").unsigned().notNullable()
      table.integer("work_id").unsigned().notNullable()
      table.integer("order_no")  //  required, of course, needed 
      //  table.foreign('concert_id').references('concerts.concert_id')
      //  table.foreign('work_id').references('works.work_id')
      table.timestamps(true, true)
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => { console.log('assoc_concert_work table dropped')
    return knex.schema.dropTableIfExists("assoc_concert_work");
};
