const client = require('../config/db');

client.get('comments').then(console.log);