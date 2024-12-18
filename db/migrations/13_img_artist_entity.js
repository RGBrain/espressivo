/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable("img_artist_entity", (table) => {
    table.increments("img_artist_entity_id").unsigned().primary();
    table.integer("artist_entity_id").notNullable().unsigned();
    table.string("artist_entity_img_filename", 255).notNullable();
    //  table.foreign('artist_entity_id').references('artist_entities.artist_entity_id')
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  console.log("img_artist_entity table dropped");
  return knex.schema.dropTableIfExists("img_artist_entity");
};
