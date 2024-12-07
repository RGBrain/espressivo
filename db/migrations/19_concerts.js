/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = (knex) => {
    return knex.schema.createTable("concerts", (table) => {
      table.increments("concert_id").unsigned().primary();
      table.datetime("concert_datetime").notNullable();
      table.string("concert_title", 255); // optional - i guess is usuall NULL - i considered putting concert title in another table to be more normalized and not have NULL values, but it is just more hassle to do that maybe
      table.string("concert_description", 5000); 
      table.integer("artist_entity_id").unsigned().notNullable();
      table.integer("venue_id").unsigned().notNullable();
      table.string("concert_fee", 255).notNullable();
      table.string("concert_fee_more_info", 1000);
      table.integer("concert_status_id").unsigned();
      //  table.foreign('artist_entity_id').references('artist_entities.artist_entity_id')
      //  table.foreign('venue_id').references('venues.venue_id')
      //  table.foreign('concert_status_id').references('concert_status.concert_status_id')
      table.timestamps(true, true);
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => { console.log('concerts table dropped')
    return knex.schema.dropTableIfExists("concerts");
};
