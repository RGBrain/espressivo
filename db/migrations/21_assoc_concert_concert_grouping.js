/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = (knex) => {
    return knex.schema.createTable("assoc_concert_concert_grouping", (table) => {  // I'm not sure the concert_groupings table will be used, but for example the two forthcoming engard quartet concerts are kind of grouped into one... so i will have tha table for flexibility if needed  (and this assoc table)
      table.increments("assoc_concert_concert_grouping_id").unsigned().primary()
      table.integer("concert_id").unsigned().notNullable()
      table.integer("concert_grouping_id").unsigned().notNullable()
      // no order_no needed, because order by concert_datetime 
      // table.foreign('concert_id').references('concerts.concert_id')
      // table.foreign('concert_grouping_id').references('concert_groupings.concert_grouping_id')
      table.timestamps(true, true)
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => { console.log('assoc_concert_concert_grouping table dropped')
    return knex.schema.dropTableIfExists("assoc_concert_concert_grouping");
};
