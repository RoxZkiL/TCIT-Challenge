const { Pool } = require("pg");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const connection = new Pool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: 5432,
  database: DB_NAME,
});

module.exports = {
  connection,
};
