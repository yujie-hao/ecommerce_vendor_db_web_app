/*jshint esversion: 6 */

const db = require('../models/dbConnection');

const orderController = {
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