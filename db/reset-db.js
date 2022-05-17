const client = require('../config/db');
const seeds = require('./seeds');

(async() => {
  try {
    for await (const seed of seeds) {
      client.set(seed.id, seed);
    }
    console.log('Successfully Reseeded DB');
  } catch (err) {
    console.error(err.message);
  }
})();