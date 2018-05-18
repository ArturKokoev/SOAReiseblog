var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
//var db = mongojs('messages', ['messages']);
var mongoose = require('mongoose');

var Message = require('./models/message');
var auth = require('./controllers/auth');

app.use(bodyParser.json());
app.use(function(req, res, next){
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
next();

})

app.get('/api/message', GetMessages );

app.post('/api/message',);

app.post('/auth/register', auth.register );


function GetMessages(req, res)
{
	Message.find({}).exec(function(err, result){
		res.send(result);
	})
}


mongoose.connect("mongodb://localhost:27017/test", function (err, db){
	if(!err){
		console.log("we are connected to mongodb")
		}
})

var server = app.listen(5000, function(){

	console.log('listening on Port', server.address().port);

}) 