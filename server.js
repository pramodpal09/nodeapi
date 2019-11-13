var express = require('express');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
// data base
var db = require(__dirname + '/connect.js');
app.db = db;
require('./routes')(app);
var server=app.listen(3000,function() {console.log('Node is running');});
