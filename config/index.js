require("dotenv").config();
const { createConnection } = require("mysql");
// Create connection variable
let connection = createConnection({
  host: process.env.dbhost,
  user: process.env.dbuser,
  password: process.env.dbpassword,
  port: process.env.dbPort,
  database: process.env.dbName,
  multipleStatements: true,
});
module.exports = connection;
