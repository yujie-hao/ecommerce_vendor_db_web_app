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