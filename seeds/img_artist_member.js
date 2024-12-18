const path = require("path");
const tableName = path.basename(__filename, ".js");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableName).del();
  await knex(tableName).insert([
    {
      img_artist_member_id: 1,
      artist_member_id: 1,
      artist_member_img_filename: "artist_member1.jpg",
    },
    {
      img_artist_member_id: 2,
      artist_member_id: 2,
      artist_member_img_filename: "artist_member2.jpg",
    },
    {
      img_artist_member_id: 3,
      artist_member_id: 3,
      artist_member_img_filename: "artist_member3.jpg",
    },
    {
      img_artist_member_id: 4,
      artist_member_id: 4,
      artist_member_img_filename: "artist_member4.jpg",
    },
  ]);
};
