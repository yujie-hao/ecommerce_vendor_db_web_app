/*jshint esversion: 6 */

// const mysql        = require('mysql');
const mysql        = require('sync-mysql');
const CONFIG       = require('../config/config');

const dbConnection = new mysql({
  host         : CONFIG.db_host,
  port         : CONFIG.db_port,
  user         : CONFIG.db_user,
  password     : CONFIG.db_password,
  database     : CONFIG.db_name
});

module.exports = dbConnection;