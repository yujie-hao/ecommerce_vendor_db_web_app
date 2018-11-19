/*jshint esversion: 6 */

const db = require('../models/dbConnection');

const orderController = {

  insertOne : (line) => {
    console.log('order record: ' + line);
    const attributes = line.split('\t');
    const dateAndTime = attributes[10].slice(0, 16).replace('T', ' ');
    console.log('dateAndTime: ' + dateAndTime);
    for (i = 0; i < attributes.length; i++) {
      console.log('attribute ' + i + ': ' + attributes[i]);
    }
    const sql = "INSERT INTO ORDERS (order_id, customer_id, customer_first_name, customer_last_name, \
      customer_street_address, customer_state, customer_zip, purchase_status, product_id, product_name, \
      purchase_amount, purchase_timestamp) VALUES (NULL, \"" + 
      attributes[0] + "\", \"" + 
      attributes[1] + "\", \"" + 
      attributes[2] + "\", \"" + 
      attributes[3] + "\", \"" + 
      attributes[4] + "\", \"" + 
      attributes[5] + "\", \"" + 
      attributes[6] + "\", \"" + 
      attributes[7] + "\", \"" + 
      attributes[8] + "\", \"" + 
      attributes[9] + "\", \"" + 
      dateAndTime   + "\");";
    const result = db.query(sql);
    let resultJson = JSON.stringify(result);
    resultJson = JSON.parse(resultJson);
    console.log(resultJson);
    console.log('\ninserted 1 record\n---');
  },

  getAllOrders : (req, res) => {
    let pathname = req._parsedUrl.pathname.split('/');
    let section = pathname[1];

    //query the DB using prepared statement
    const result = db.query('SELECT * FROM ORDERS');
    //make results
    let resultJson = JSON.stringify(result);
    resultJson = JSON.parse(resultJson);
    apiResult = {};
    apiResult.meta = {
      table         : section,
      type          : "collection",
      total         : 1,
      total_entries : 0
    };

    apiResult.data = resultJson;
    //send JSON to Express
    res.json(apiResult);
  }
};
module.exports = orderController;