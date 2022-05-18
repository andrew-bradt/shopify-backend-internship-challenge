const listMode = process.argv[2];
const client = require('../config/db');

if (listMode === 'comments') { 
  client.get('comments').then(console.log);
} else {
  client.getAll().then(console.log);
}