/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable("img_artist_member", (table) => {
    table.increments("img_artist_member_id").unsigned().primary();
    table.integer("artist_member_id").notNullable().unsigned();
    table.string("artist_member_img_filename", 255).notNullable();
    //  table.foreign('artist_member_id').references('artist_members.artist_member_id')
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  console.log("img_artist_member table dropped");
  return knex.schema.dropTableIfExists("img_artist_member");
};
