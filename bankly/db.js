/** Database setup for jobly. */

const { Client } = require('pg');
const { DB_URI } = require('./config');

const db = new Client({
    host : "/var/run/posgresql",
    database : DB_URI
});

db.connect();

module.exports = db;
