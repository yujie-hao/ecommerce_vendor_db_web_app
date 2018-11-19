/*jshint esversion: 6 */

const formidable      = require('formidable');
const fs              = require('fs');
const path            = require('path');
const orderController = require('./orderController');

const fileController = {};

fileController.parseFile = (filePath) => {
  console.log('Parsing file: ' + filePath);
  fs.readFileSync(filePath).toString().split('\n').forEach((line) => {
    orderController.insertOne(line);
  });
};

fileController.saveFile = (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    const oldpath = files.filetoupload.path;
    console.log('oldpath: ' + oldpath);
    const newpath = path.join(__dirname, '../files/' + files.filetoupload.name);
    console.log('newpath: ' + newpath);
    fs.renameSync(oldpath, newpath);
    res.write('File uploaded and moved!');
    res.end();
    console.log('Finished saving file\n=============\n');
    fileController.parseFile(newpath);
  });
};

module.exports = fileController;