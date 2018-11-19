/*jshint esversion: 6 */

const express    = require('express');
const fileRouter = express.Router();
const formidable = require('formidable');
const fs         = require('fs');
const path       = require('path');
// const orderController = require('../controllers/orderController');

const saveFile = (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    const oldpath = files.filetoupload.path;
    console.log('oldpath: ' + oldpath);
    const newpath = path.join(__dirname, '../files/' + files.filetoupload.name);
    console.log('newpath: ' + newpath);
    fs.rename(oldpath, newpath, (err) => {
      if (err) {
        throw err;
      }
      res.write('File uploaded and moved!');
      res.end();
    });
  });
};

fileRouter.post('/', saveFile);
module.exports = fileRouter;
