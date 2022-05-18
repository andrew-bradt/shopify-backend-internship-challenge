const client = require('../config/db');
const seeds = require('./seeds');

(async() => {
  try {
    await client.empty();
    
    for await (const seed of seeds) {
      // const item = new Item(seed);
      client.set(seed.id, seed);
    }
    
    console.log('Successfully Reseeded DB');
  } catch (err) {
    console.error(err.message);
  }
})();