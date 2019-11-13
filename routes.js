//user
var user = require('./user.js');
module.exports = function(app){
    app.get('/', function(req, res){
        res.sendFile(__dirname + '/index.html');
    });
    app.post('/user-save',user.register);
    app.get('/dashboard',function(req,res){
      res.sendFile(__dirname + '/dashboard.html');
    });
}
