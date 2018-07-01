var mongoose = require('mongoose');

module.exports = mongoose.model('Message',{
	ortsid: String,
	ort: String,
    msg: String,
    user: {type: mongoose.Schema.ObjectId, ref: 'User'}

});