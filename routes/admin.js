var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const adminModel = require('./adminModel');
const SHA256 = require('crypto-js/sha256');
router.get('/',function (req,res) {
        res.render('admin',{errlog:0});

});

router.post('/',function (req,res) {
        adminModel.find({username: req.body.username},'password',function (err,user1) {
            if(typeof user1[0] == 'undefined')
            {
                res.render('admin',{errlog:1});
            }
            else
            {
                if(user1[0].password == SHA256(req.body.password))
                {
                    res.render('adminHome');
                }
                else
                {
                    res.render('admin',{errlog:2})
                }

            }
        });

});





module.exports = router;
