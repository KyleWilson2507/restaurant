var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');

var Food = require('../models/food');
var Order = require('../models/order');

/* GET home page. */
router.get('/', function (req, res, next) {
    var successMsg = req.flash('success')[0];
    Food.find(function (err, docs) {
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', {title: 'KemoShop', foods: productChunks, successMsg: successMsg, noMessages: !successMsg});
    });
});

router.get('/product/:page', function (req, res, next) {
    var page = req.params.page || 1; /* page - biến chứa số trang hiện tại (Lấy từ request) */
    Food.find(function (err, docs) {
        var productChunks = [];
        var chunkSize = 3;
        if (page == 1){
            for (var i = 0; i < docs.length && i < 6; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
            }
        }
        else
        {
            for (var i = (page - 1)*6; i < docs.length && i < 6*page; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        }
        res.render('shop/index', {title: 'KemoShop', foods: productChunks,
        current: page,
        pages: Math.ceil(docs.length / 6)}); 
    });
 });


router.get('/home', function (req, res, next) {
    var successMsg = req.flash('success')[0];
        res.render('shop/home', {title: 'Home', successMsg: successMsg, noMessages: !successMsg});
});

router.get('/products', function (req, res, next) {
    var successMsg = req.flash('success')[0];
        res.render('shop/products', {title: 'Branded Foods', successMsg: successMsg, noMessages: !successMsg});
});

router.get('/single', function (req, res, next) {
    var successMsg = req.flash('success')[0];
        res.render('shop/single', {title: 'Single Pane', successMsg: successMsg, noMessages: !successMsg});
});

router.get('/checkout.html', function (req, res, next) {
    var successMsg = req.flash('success')[0];
        res.render('shop/checkoutv2', {title: 'Checkout', successMsg: successMsg, noMessages: !successMsg});
});

router.get('/payment', function (req, res, next) {
    var successMsg = req.flash('success')[0];
        res.render('shop/payment', {title: 'Payment', successMsg: successMsg, noMessages: !successMsg});
});

router.get('/single/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart({});
    Food.findById(productId, function(err, product) {
       if (err) {
           return res.redirect('/');
       }
      cart.add(product, product.id);
      var single = cart.generateArray();
        res.render('shop/single', {foods: single});
    });
    

});


router.get('/add-to-cart/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    Food.findById(productId, function(err, product) {
       if (err) {
           return res.redirect(req.params);
       }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('back');
    });
});

router.get('/reduce/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.reduceByOne(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
});

router.get('/remove/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
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