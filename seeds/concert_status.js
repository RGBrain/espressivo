/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('concert_status').del()
  await knex('concert_status').insert([
    {concert_status_id: 1, concert_status_text: 'Tickets available soon'},
    {concert_status_id: 2, concert_status_text: 'Tickets now on sale'},
    {concert_status_id: 3, concert_status_text: 'Sold out'}
  ]);
};
