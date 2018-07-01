var Message = require('../models/message');

module.exports ={

	get: function (req, res) {
		Message.find({}).populate('user', '-pwd').exec(function (err, result){
			res.send(result);
		})
	},


    post: function (req, res) {
        console.log(req.body, req.user);
        req.body.user = req.user;
        var message = new Message(req.body)
    	res.json(req.body);
        message.save();
        res.status(200);
    },

edit: function(req, res){
 var id = req.params.id;
  console.log(id);
     res.send(id);
       
},

 delete: function (req, res) {
  var id = req.params.id;
  console.log(id);
  Message.findByIdAndRemove({_id: id}, function (err, doc) {
  	  res.json(doc);

  });
},

put: function (req, res){
	var id = req.params.id;
	//var newmessage = new Message(req.body);
	Message.findByIdAndUpdate({_id: id}, {$set:req.body}, {new :true }, function (err, doc){
  	res.json(doc);

	});
} 



}