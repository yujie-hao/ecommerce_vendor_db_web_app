/*jshint esversion: 6 */

const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const basename  = path.basename(__filename);
const CONFIG       = require('./config/config');
const db        = {};

const sequelize = new Sequelize(
  CONFIG.db_name,
  CONFIG.db_user,
  CONFIG.db_password, {
    host             : CONFIG.db_host,
    dialect          : CONFIG.db_dialect,
    port             : CONFIG.db_port,
    operatorsAliases : false  
});