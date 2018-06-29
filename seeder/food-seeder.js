var Food = require('../models/food');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/food');
var dish =
[
	new Food
	({
		code:"1A",
		img:"http://localhost:3000/images/1-RIS_6IbCLYv1X3bzYW1lmA.jpeg",
		title:"Fast food 1",
		category: "Starter",
		description: "Fast food 1 description",
		price: 200
	}),
	
	new Food
	({
		code:"2A",
		img:"http://localhost:3000/images/2855239227_a267e71cb8_b.jpg",
		title:"Fast food 2",
		category: "Starter",
		description: "Fast food 2 description",
		price: 2000
	}),
	
	new Food
	({
		code:"3A",
		img:"http://localhost:3000/images/1491584380240.jpeg",
		title:"Fast food 3",
		category: "Starter",
		description: "Fast food 3 description",
		price: 6000
	}),
	
	new Food
	({
		code:"4A",
		img:"http://localhost:3000/images/1491584380240.jpg",
		title:"Fast food 4",
		category: "Starter",
		description: "Fast food 4 description",
		price: 1200
	}),
	
	new Food
	({
		code:"5A",
		img:"http://localhost:3000/images/images%20(1).jpg",
		title:"Fast food 5",
		category: "Starter",
		description: "Fast food 5 description",
		price: 1200
	}),
	
	new Food
	({
		code:"6A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Starter",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"7A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 7",
		category: "Starter",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"8A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 8",
		category: "Starter",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"9A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 9",
		category: "Starter",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"10A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 10",
		category: "Starter",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"12A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Main",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"13A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Main",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"14A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Main",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"15A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Main",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"16A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Main",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"17A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Main",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"18A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Main",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"19A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Main",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"20A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Main",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"11A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Main",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"21A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Drink",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"22A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Drink",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"23A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Drink",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"24A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Drink",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"25A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Drink",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"26A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Drink",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"27A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Drink",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"28A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Drink",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"29A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Drink",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"30A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Drink",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"31A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Dessert",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"32A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Dessert",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"33A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Dessert",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"34A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Dessert",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"35A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Dessert",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"36A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Dessert",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"37A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Dessert",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"38A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Dessert",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"39A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Dessert",
		description: "Fast food 6 description",
		price: 1200
	}),
	
	new Food
	({
		code:"40A",
		img:"http://localhost:3000/images/images.jpg",
		title:"Fast food 6",
		category: "Dessert",
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
