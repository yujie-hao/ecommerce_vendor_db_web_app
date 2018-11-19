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
      purchase_amount, purchase_timestamp) VALUES ?";
    const values = [
      [0, attributes[0], attributes[1], attributes[2], attributes[3], attributes[4], attributes[5], 
      attributes[6], attributes[7], attributes[8], attributes[9], dateAndTime],
    ];

    db.query(sql, [values], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log('1 record inserted: ' + result.affectedRows);
      }
    });
  },

  getAllOrders : (req, res) => {
    let pathname = req._parsedUrl.pathname.split('/');
    let section = pathname[1];

    //query the DB using prepared statement
    db.query('SELECT * FROM ORDERS', [section], (error, results, fields) => {
      let apiResult = {};
      if (error) {
        console.log(error);        
        apiResult.meta = {
          table : section,
          type  : "collection",
          total : 0
        };

        //create an empty data table
        apiResult.data = [];
        //send the results (apiResult) as JSON to Express res --> Express uses res.json to send JSON to client
        res.json(apiResult);
      }

      //make results
      let resultJson = JSON.stringify(results);
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
    });
  }
};
module.exports = orderController;