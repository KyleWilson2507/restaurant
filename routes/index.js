var express = require('express');
var router = express.Router();
var food = require('../models/food');
var Cart = require('../models/cart');

router.use(function (req, res, next) {
    res.locals.login = req.isAuthenticated();
    next();
});
/* GET home page. */
router.get('/', function(req, res, next) {
	food.find(function(err,docs)
	{
		var foodChunk=[];
		var chunkSize=3;
		for(var i=0; i<docs.length; i+=chunkSize)
			foodChunk.push(docs.slice(i,i+chunkSize));
		res.render('shop/index', { title: 'Express', foods: foodChunk});
	});
  	
});

router.get('/add-to-cart/:id', function (req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart.items : {});
    
    food.findById(productId, function (err, food) {
        cart.add(food, food.id);
        req.session.cart = cart;
        res.redirect('/');
    });
});

router.get('/shopping-cart', function(req, res, next) {
   if (!req.session.cart) {
       return res.render('shop/shopping-cart', {foods: null});
   } 
    var cart = new Cart(req.session.cart);
    res.render('shop/shopping-cart', {foods: cart.generateArray(), totalPrice: cart.totalPrice});
});

router.get('/checkout', isLoggedIn, function(req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);
    var errMsg = req.flash('error')[0];
    res.render('shop/checkout', {total: cart.totalPrice, errMsg: errMsg, noError: !errMsg});
});

router.post('/checkout', isLoggedIn, function(req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);
    
    var stripe = require("stripe")(
        "sk_test_fwmVPdJfpkmwlQRedXec5IxR"
    );

    stripe.charges.create({
        amount: cart.totalPrice * 100,
        currency: "usd",
        source: req.body.stripeToken, // obtained with Stripe.js
        description: "Test Charge"
    }, function(err, charge) {
        if (err) {
            req.flash('error', err.message);
            return res.redirect('/checkout');
        }
        var order = new Order({
            user: req.user,
            cart: cart,
            address: req.body.address,
            name: req.body.name,
            paymentId: charge.id
        });
        order.save(function(err, result) {
            req.flash('success', 'Successfully bought product!');
            req.session.cart = null;
            res.redirect('/');
        });
    }); 
});

module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.session.oldUrl = req.url;
    res.redirect('/user/signin');
}