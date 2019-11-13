exports.register = function(req, res){
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  var db = req.app.db;
  db.query("Insert into users (name,email,password) Values('"+name+"','"+email+"','"+password+"')",function(err,result,fields){
    if(err) throw err;
    return res.redirect('/dashboard');
  });
};
