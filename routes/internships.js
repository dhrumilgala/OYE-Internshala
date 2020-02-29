var express= require('express');
var router = express.Router();
const internship = require('./internshipsModel');
const fs = require('fs');
const internsh = require('./internshipsModel');
const user = require('./variables');
const req1 = require('./requestsModel');
var internshipId = '';


router.get('/',function (req,res) {
    internsh.find({complete:0},function (err,internship) {
        res.render('internships',{internships:internship})
    });


});
router.get('/:id',function (req,res) {

    internsh.findOne({internshipId:req.params.id},function (err,internship) {
        internshipId = req.params.id;
        res.render('applyInternship',{internship:internship,userEmail:user.viewEmail()});
    });

});

router.post('/request',function (req,res) {
    const req2 = new req1;
    req2.internshipId = internshipId;
    req2.userId = user.viewEmail();
    req2.domain = req.body.domain;
    req2.save();
    res.render('thankyou');
});
module.exports = router;
