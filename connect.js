var mysql = require('mysql');
var con = mysql.createConnection({
  port:3306,
  host:'localhost',
  user:'root',
  password:'',
  database:'user_management'
});
con.connect(function(err){
  if(err){
    console.log('unable to connect '+err);
    if(err) throw err;
  }
});
module.exports = con;
