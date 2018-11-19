/*jshint esversion: 6 */

const express        = require('express');
const fileRouter     = express.Router();
const fileController = require('../controllers/fileController');
// const orderController = require('../controllers/orderController');

fileRouter.post('/', fileController.saveFile);
module.exports = fileRouter;
