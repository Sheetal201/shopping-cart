var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [new Product({
	imagePath: 'https://5.imimg.com/data5/YW/FK/MY-16269511/leather-fashion-handbags-250x250.jpg',
	title:'Handbag',
	description: 'Best Brand!!!',
	price: 2000
}),

new Product({
	imagePath: 'https://c.76.my/Malaysia/sweety-girl-korean-leather-4-1-bags-women-fashion-handbags-onqueen-1511-04-OnQueen@2.jpg',
	title:'Handbag',
	description: 'Best Brand!!!',
	price: 2000
}),

new Product({
	imagePath: 'https://images-na.ssl-images-amazon.com/images/I/71vlQ4BUaJL._UY395_.jpg',
	title:'Handbag',
	description: 'Best Brand!!!',
	price: 2000
}),

new Product({
	imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLvn1GVCHJtfML_nHqb8tC849iJwNv97KTa_uGnmfl7iswQ_VA',
	title:'Handbag',
	description: 'Best Brand!!!',
	price: 2000
}),

new Product({
	imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv2Q5-gsHnwckKxxsCN-ep4Wn3wAogD2cavW8zkg4SmNkG0oGBog',
	title:'Handbag',
	description: 'Best Brand!!!',
	price: 2000
}),

new Product({
	imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmMQjIYaSPSdhnuK8LJYg4TDbAYYlFuxKZIMq3wGCK881T8h6MCw',
	title:'Handbag',
	description: 'Best Brand!!!',
	price: 2000
}),
];

var done = 0;
for (var i=0; i < products.length; i++){
	products[i].save(function(err, result){
		done++;
		if(done === products.length){
			exit();
		}
	});
}
function exit(){
	mongoose.disconnect();
}

