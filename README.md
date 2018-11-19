Ecommerce vendor Database
===============================

This repository contains the source code for ecommerce vendor database web app project.

DEMO
-------------------------
 - [Ecommerce vendor database demo](https://youtu.be/GC-TlW9AxBE)

Install prerequisites
-------------------------

**Tools**
 - Schema design: [draw.io](https://get.draw.io/) - Open the schema design
 - Relational database: [MySQL](https://www.mysql.com/downloads/) - The database of this product
 - Database UI: [MySQL workbench](https://dev.mysql.com/downloads/workbench/) - The frontend app to access the database
 - MVC framework: [Node.js](https://nodejs.org/en/download/)
 - Rest client test tool: [Postman](https://www.getpostman.com/apps)

**Commands**
 - Install nodejs dependencies
```
npm install
```

Run the app
-------------------------
 - Start MySQL
  ```
  sudo /usr/local/mysql/support-files/mysql.server start
  ```
 - Execute the sql script to create table (data import from MySQL workbench: ecommerce_vendor_database_ORDERS.sql)
 - Enable MySQL DB connection
  ```
  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mysql1234'
  ```
 - Start ecommerce server
   - vist the ecommerce app folder
   - type command:
   ```
   DEBUG=ecommerce_vendor_database_web_app:* npm run devstart
   ```
 - Open web portal: http://localhost:3000
 - Upload file to server

 Test
-------------------------
 - Use MySQL workbench to test the result after uploading the file
   - Utilize insert_query.sql
   - Utilize postman
     - Import eCommerce_vendor_database_web_app.postman_collection.json to postman
     - Send the GET request and check the response

 Todo ( If time permits, do the following )
-------------------------
 - Implement the table as described per ecommerce_vendor_db_schema (normalized table)
   - Create customer table
   - Create purchase table
   - Create product table
   - Create ownership table
 - Register, login feature for user
   - Create a user table to store user email and password
   - Utilize express 'express-session' and 'session-file-store' lib to authenticate the session user when both email and password matches the db record
 - Irregularity detection and alerting
   - When detect a 'cancel' order, do query in DB ownership table.
     - If same customer id purchase the same product id before, and previous product amount is larger or equal to cancel amount, allow insertion. And update the ownership table product amount.
     - Otherwise, reject the insertion.
 - Detecting and handling updating addresses for customers
   - When insert a new order record, do query in customer table. If customer address is different than the existing address, update it