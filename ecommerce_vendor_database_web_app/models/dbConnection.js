/*jshint esversion: 6 */

const mysql        = require('mysql');
const CONFIG       = require('../config/config');

const dbConnection = mysql.createConnection({
  host         : CONFIG.db_host,
  port         : CONFIG.db_port,
  user         : CONFIG.db_user,
  password     : CONFIG.db_password,
  database     : CONFIG.db_name,
  insecureAuth : true
});

dbConnection.connect((err) => {
  if (err) {
    throw err;    
  }
  console.log("Connected to MySQL");
});

module.exports = dbConnection;