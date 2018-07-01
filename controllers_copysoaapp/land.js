var Land = require('../models/land');

module.exports ={

	get: function (req, res) {
    Land.find(function (err, result){
      res.send(result);
    })
  },


    post: function (req, res) {
        console.log(req.body, req.user);
        
    
        var land = new Land({
         ort: req.body.ort, 
          ortsid: req.body.ortsid
         
        })
      
      res.json(req.body);
        land.save();
        res.status(200);
    },



}