var Food = require('../models/food');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/food');
var dish =
[
	new Food
	({
		id:"1A",
		img:"http://localhost:3000/images/1-RIS_6IbCLYv1X3bzYW1lmA.jpeg",
		title:"Fast food 1",
		description: "Fast food 1 description",
		price: 200
	}),
	
	new Food
	({
		id:"2A",
		img:"http://localhost:3000/images/2855239227_a267e71cb8_b.jpg",
		title:"Fast food 2",
		description: "Fast food 2 description",
		price: 2000
	}),
	
	new Food
	({
		id:"3A",
		img:"http://localhost:3000/images/1491584380240.jpeg",
		title:"Fast food 3",
		description: "Fast food 3 description",
		price: 6000
	}),
	
	new Food
	({
		id:"4A",
		img:"http://localhost:3000/images/holiday-1200x672.jpg",
		title:"Fast food 4",
		description: "Fast food 4 description",
		price: 1200
	}),
	
	new Food
	({
		id:"5A",
		img:"http://localhost:3000/images/images%20(1).jpg",
		title:"Fast food 5",
		description: "Fast food 5 description",
		price: 1200
	}),
	
	new Food
	({
		id:"6A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		description: "Fast food 6 description",
		price: 1200
	})
];

var added=0;
for(var i=0; i<dish.length; i++)
{
	dish[i].save(function(err,result)
	{
		added++;
		if(added === dish.length)
		{
			exit();
		}
	});
};

function exit()
{
	mongoose.disconnect();
}
