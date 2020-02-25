var express = require('express');
var router = express.Router();
const user = require('./userModel');
var SHA256 = require('crypto-js/sha256')

router.get('/',function (req,res) {
    res.render('signup',{errlog: 0})
});

router.post('/',function (req,res) {

    var myData = new user({
        name : req.body.Name,
        email: req.body.email,
        password: SHA256(req.body.password)
    });
    user.find({email: req.body.email},function (err,user1) {
        if(typeof user1[0]== 'undefined')
        {
            myData.save().then(item => console.log('item added to db'));
            res.redirect('/');
        }
        else
        {
            res.render('signup',{errlog:1})
        }
    })
});

module.exports = router;
