const client = require('../config/db');
const seeds = require('./seeds');

// class Item {
//   constructor({id, name, description, imgURL}) {
//     this.id = id;
//     this.name = name;
//     this.description = description;
//     this.imgURL = imgURL;
//   }
// }

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