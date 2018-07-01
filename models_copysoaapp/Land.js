var mongoose = require('mongoose');



module.exports = mongoose.model('Land',{
    ort: String,
    ortsid: String,
   message: {type: mongoose.Schema.ObjectId, ref: 'Message'}

});