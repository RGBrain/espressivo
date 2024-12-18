/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = (knex) => {
    return knex.schema.createTable("concert_groupings", (table) => {  // I'm not sure this table will be used, but for example the two forthcoming engard quartet concerts are kind of grouped into one... so i will have this table for flexibility if needed
      table.increments("concert_grouping_id").unsigned().primary()
      table.string("concert_grouping_title", 255)
      table.string("concert_grouping_text", 2500) 
      table.timestamps(true, true)
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => { console.log('concert_groupings table dropped')
    return knex.schema.dropTableIfExists("concert_groupings");
};
