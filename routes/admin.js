var express = require('express');
var router = express.Router();
const adminModel = require('../models/adminModel');
const SHA256 = require('crypto-js/sha256');
let validUser = false;
const user = require('../models/userModel');
const internship = require('../models/internshipsModel');
const requests = require('../models/requestsModel')


//ROUTER FOR ADMIN LOGIN
router.get('/',function (req,res) {
    if(validUser==true)
    {
        res.render('adminHome')
    }
    else
    {

        res.render('admin',{errlog:0});

    }
});

//ROUTER FOR ADMIN LOGOUT
router.get('/logout',function (req,res) {
    validUser = false;
    res.redirect('/')
});

//ROUTER FOR ADMIN HOME PAGE
router.post('/',function (req,res) {
        adminModel.find({username: req.body.username}, 'password', function (err, user1) {
            if (typeof user1[0] == 'undefined') {
                res.render('admin', {errlog: 1});
            } else {
                if (user1[0].password == SHA256(req.body.password)) {
                    validUser = true;
                    res.render('adminHome');
                } else {
                    res.render('admin', {errlog: 2})
                }
            }
        });
});

//ROUTER FOR ADMIN ADD INTERNSHIP
    router.get('/internships', function (req, res) {
        const u = [];
        user.find({}, function (err, user1) {
            res.render('addInternship', {disp: validUser, users: user1})

        });
    });

    router.post('/addInternship', function (req, res) {
        var intern = new internship;
        intern.name = req.body.name;
        intern.description = req.body.description;
        intern.user1 = req.body.user1;
        intern.user2 = req.body.user2;
        intern.user3 = req.body.user3;
        intern.user4 = req.body.user4;
        intern.internshipId = req.body.internshipid;
        intern.complete = req.body.complete;
        intern.link = req.body.link1;
        intern.save();
        res.redirect('/admin')

    });

    router.get('/home', function (req, res) {
        res.redirect('/admin')
    });


    router.get('/requests',function (req,res) {

        requests.find({seen:false},function (err,result) {
            res.render('requests',{req1:result,disp:validUser})
        })
    })
    router.get('/requests/:id',function (req,res) {

        const r = req.params.id;
        requests.find({_id:r},function (err,result) {
            if(err){
                console.log(err)
            }
            result[0].seen = true
            result[0].save()
        })
        requests.remove({_id:r})

            res.redirect('/admin/requests')
        })


    // TO CREATE AN ADMIN

    router.get('/xyz',function (req,res) {
        var myData = new adminModel ({
            username:'admin',
            password: SHA256('admin')
        })
        myData.save();
    })


module.exports = router;
