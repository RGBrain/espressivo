/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = (knex) => {
    return knex.schema.createTable("assoc_box_office_concert", (table) => {
      table.increments("assoc_box_office_concert_id").unsigned().primary()
      table.integer("box_office_id").unsigned().notNullable()
      table.integer("concert_id").unsigned().notNullable()
      table.string("box_office_phone_number", 255)  // phone number is best here, in case box office number changes from time to time, and it's more accurate record in here 
      table.string("box_office_website_link", 255)
      table.integer("order_no")  // this is in case a box office has more importance than another box office 
      //  table.foreign('concert_id').references('concerts.concert_id')
      //  table.foreign('box_office_id').references('box_offices.box_office_id')
      table.timestamps(true, true)
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => { console.log('assoc_box_office_concert table dropped')
    return knex.schema.dropTableIfExists("assoc_box_office_concert");
};
