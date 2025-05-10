/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = (knex) => {
    return knex.schema.createTable("artist_types", (table) => {
      table.increments("artist_type_id").unsigned().primary()
      table.string("artist_type_text", 255).notNullable()  // e.g.  'string quartet'.  Now for a pianist, should they be 'soloist' (Artist_type) ... OR ... 'pianist' (Artist_type) ????  Problem with pianist, is then we need clarinnettist entry, flautist etc. etc.    The piano player would already be assoc to 'piano' as their instrument,  via,  instrument < artist_member < artist.  And then we can do logic to get to 'pianist'  i.e.   "soloist" + "piano" (instrument).  We could have a function or module or object which specifically does such conversion of instrument > instrumentalist e.g.   'flute' > 'flautist'.    So, artist_types should be:    'string quartet', 'soloist', 'singer' (in the case of 'singer', 'tenor' is obtained from 'instrument' record).  So, artist_type is not too specific.    Perhaps the one exceptions are groups (> 1 member), like 'string quartet', which needs to be specific here, because we cannot easily obtain 'string quartet' from their artist_member and instrument records.  

      //  Or should there be a 'pianist'  artist_type.  think...... i'm not sure about this... 
      
      table.timestamps(true, true)
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => { console.log('artist_types table dropped')
    return knex.schema.dropTableIfExists("artist_types");
};
