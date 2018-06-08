var express = require('express');
var router = express.Router();
var food = require('../models/food');

/* GET home page. */
router.get('/', function(req, res, next) {
	food.find(function(err,docs)
	{
		var foodChunk=[];
		var chunkSize=3;
		for(var i=0; i<docs.length; i+=chunkSize)
			foodChunk.push(docs.slice(i,i+chunkSize));
		res.render('index', { title: 'Express', foods: foodChunk});
	});
  	
});

module.exports = router;
