require('dotenv').config();
const Client = require('@replit/database');
const client = new Client(process.env.REPLIT_DB_URL);

module.exports = client;