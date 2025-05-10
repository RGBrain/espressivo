/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = (knex) => {
    return knex.schema.createTable("concert_text", (table) => {  //  do you think....  This could be generic text relating to concerts, it could be concert description or programme description etc.  Could have another column "text_type" ??   I'm not sure... i really am not sure.....  
      table.increments("concert_text_id").unsigned().primary()
      table.integer("concert_id").unsigned().notNullable()
      table.string("concert_text", 5000).notNullable()
      table.integer("order_no") // perhaps it is not needed.   Perhaps, layout would be done some over way, via ACP or frontend or another MySQL table... not sure... 
      // table.foreign('concert_id').references('concerts.concert_id')
      table.timestamps(true, true)
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => { console.log('concert_text table dropped')
    return knex.schema.dropTableIfExists("concert_text");
};
