/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = (knex) => {
    return knex.schema.createTable("box_offices", (table) => { 
      table.increments("box_office_id").unsigned().primary()
      table.string("box_office_name", 255).notNullable()
      table.string("box_office_phone_number", 255)  // GENERIC INFO FOR THE BOX OFFICE 
      table.string("box_office_website", 255)  // GENERIC INFO FOR THE BOX OFFICE 
      table.timestamps(true, true)
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => { console.log('box_offices table dropped')
    return knex.schema.dropTableIfExists("box_offices");
};
