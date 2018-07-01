var express = require('express');
var app = express();
var User = require('./models/user');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var mongoose = require('mongoose');
var db = mongojs('messages', ['messages']);
var message = require('./controllers/message');
var land = require('./controllers/land');
var Message = require('./models/message');
var Land = require('./models/land');
var auth = require('./controllers/auth');
var cors = require('./services/cors');
var checkAuthenticated = require('./services/checkAuthenticated');


//Middleware
app.use(bodyParser.json());
app.use(cors);


//Requests
app.get('/api/message',message.get);
app.get('/api/message:id', message.edit);
app.post('/api/message', checkAuthenticated, message.post);
app.post('/auth/register', auth.register);
app.post('/auth/login', auth.login);
app.delete('/api/message/delete:id', message.delete);
app.put('/api/message/update:id', message.put);
app.post('/api/land', checkAuthenticated , land.post);
app.get('/api/land/bericht', land.get);
app.get('/api/user/messages', auth.get)


app.get('/api/me', checkAuthenticated, function(req, res) {
  User.findById(req.user, function(err, user) {
    res.send(user);
  });
});

//Connection
mongoose.connect("mongodb://localhost:27017/test", function (err, db){
	if(!err){
		console.log("we are connected to mongodb")
		}
})

var server = app.listen(5000, function(){
	console.log('listening on Port', server.address().port);

}) 