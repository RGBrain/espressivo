/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable("img_artist", (table) => {
    table.increments("img_artist_id").unsigned().primary();
    table.integer("artist_id").notNullable().unsigned();
    table.string("artist_img_filename", 255).notNullable();
    //  table.foreign('artist_id').references('artists.artist_id')
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  console.log("img_artist table dropped");
  return knex.schema.dropTableIfExists("img_artist");
};
