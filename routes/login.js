var express = require('express');
var router = express.Router();
var user = require('./userModel');
var SHA256 = require('crypto-js/sha256');
var variables = require('./variables');

router.post('/hey',function (req,res) {

    user.find({email:req.body.email},function (err,user1) {
        if(typeof user1[0] == 'undefined')
        {
            res.render('login',{ errlog : 2});
        }
        else
        {
            if(user1[0].password == SHA256(req.body.password))
            {
                variables.updateEmail(user1[0].email);
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

module.exports = router;
