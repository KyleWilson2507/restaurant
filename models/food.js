var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema
({
	code:
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

module.exports=mongoose.model('Food', schema);