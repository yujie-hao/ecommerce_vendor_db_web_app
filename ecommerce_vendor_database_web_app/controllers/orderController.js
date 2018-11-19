/*jshint esversion: 6 */

const db = require('../models/dbConnection');

const orderController = {

  insertOne : (line) => {
    console.log('order record: ' + line);
    const sql = "INSERT INTO ORDERS (order_id, customer_id, customer_first_name, customer_last_name, \
      customer_street_address, customer_state, customer_zip, purchase_status, product_id, product_name, \
      purchase_amount, purchase_timestamp) \
      VALUES (NULL, '1', 'Snake', 'Plisken', 'Fake St.', 'AZ', '12345', 'new', '432', 'Masthead', 100.12, '2007-04-05 14:30:00');";
    db.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log('1 record inserted: ' + result);
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