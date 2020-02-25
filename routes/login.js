var express = require('express');
var router = express.Router();
var user = require('./userModel');
var SHA256 = require('crypto-js/sha256');

router.post('/hey',function (req,res) {
    console.log(req.body.email);
    user.find({email:req.body.email},'password',function (err,user1) {
        if(typeof user1[0] == 'undefined')
        {
            res.render('login',{ errlog : 2});
        }
        else
        {
            if(user1[0].password == SHA256(req.body.password))
            {
                console.log('pass');
                res.redirect('/');
            }
            else
            {
                res.render('login',{ errlog : 1})
            }
        }

    });
});

router.get('/',function (req,res) {
    res.render('login',{errlog:0})
});

router.post('/hey',function (req,res) {
    res.redirect('/');
});
module.exports = router;
