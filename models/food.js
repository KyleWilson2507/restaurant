var mongoose = require('mongoose');
var schema = mongoose.Schema;

var s2 = new schema
({
	id:
	{
		type: String,
		required: true
	},
	img:
	{
		type: String,
		required: true
	},
	title:
	{
		type: String,
		required: true
	},
	description:
	{
		type: String,
		required: true
	},
	price:
	{
		type: Number,
		required: true
	}
});

module.exports=mongoose.model('Food', s2);