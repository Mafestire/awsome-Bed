require('dotenv').config();
const { createPool } = require('mysql');
// Create connection variable
let connection = createPool({
    host: process.env.dbhost,
    user: process.env.dbuser,
    password: process.env.dbpassword,
    port: process.env.dbPort,
    database: process.env.dbName,
    multipleStatements: true
});
module.exports = connection;