/*jshint esversion: 6 */

const express = require('express');
const orderRouter = express.Router();
const orderController = require('../controllers/orderController');

/* GET users listing. */
orderRouter.get('/', orderController.getAllOrders);

module.exports = orderRouter;
