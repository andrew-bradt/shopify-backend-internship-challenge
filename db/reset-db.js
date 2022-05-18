const client = require('../config/db');
const {items, comments} = require('./seeds');

(async() => {
  try {
    await client.empty();
    
    for await (const item of items) {
      client.set(item.id, item);
    }
    await client.set('comments', comments);
    
    console.log('Successfully Reseeded DB');
  } catch (err) {
    console.error(err.message);
  }
})();