var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/admin', function (req, res, next) {
    var successMsg = req.flash('success')[0];
        res.render('admin/dashboard', {title: 'Admin', successMsg: successMsg, noMessages: !successMsg});
});

router.get('/user', function (req, res, next) {
    var successMsg = req.flash('success')[0];
        res.render('admin/user', {title: 'Admin', successMsg: successMsg, noMessages: !successMsg});
});

module.exports = router;
