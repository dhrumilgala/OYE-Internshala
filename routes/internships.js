var express= require('express');
var router = express.Router();
const internship = require('./internshipsModel');
const fs = require('fs');
const internsh = require('./internshipsModel');
const req1 = require('./requestsModel');
var internshipId = '';

function parseCookies (request) {
    var list = {},
        rc = request.headers.cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    return list;
}

router.get('/',function (req,res) {
    internsh.find({complete:0},function (err,internship) {
        res.render('internships',{internships:internship})
    });


});
router.get('/:id',function (req,res) {
    const a=parseCookies(req);
    internsh.findOne({internshipId:req.params.id},function (err,internship) {
        internshipId = req.params.id;
        res.render('applyInternship',{internship:internship,userEmail:decodeURIComponent(a.username)});
    });

});

router.post('/request',function (req,res) {
    const req2 = new req1;
    const a=parseCookies(req);
    req2.internshipId = internshipId;
    req2.userId = decodeURIComponent(a.username);
    req2.domain = req.body.domain;
    req2.seen = false;
    req2.date = Date.now()
    req2.save();
    res.render('thankyou');
});


module.exports = router;
