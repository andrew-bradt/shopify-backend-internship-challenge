const client = require('../config/db');

client.getAll().then(console.log);