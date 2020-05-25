var express = require('express');
var router = express.Router();
var user = require('./userModel');
var SHA256 = require('crypto-js/sha256');


function parseCookies (request) {
  var list = {},
      rc = request.headers.cookie;

  rc && rc.split(';').forEach(function( cookie ) {
    var parts = cookie.split('=');
    list[parts.shift().trim()] = decodeURI(parts.join('='));
  });

  return list;
}


router.get('/', function(req, res, next) {
  const a=parseCookies(req);
  res.render('home',{user:decodeURIComponent(a.username)});
});
router.get('/logout',function (req,res) {
  res.clearCookie('username');
  res.redirect('/');
});

router.get('/login',function (req,res) {
  res.render('login',{errlog:0})
});

router.post('/login/hey',function (req,res) {

  user.find({email:req.body.email},function (err,user1) {
    if(typeof user1[0] == 'undefined')
    {
      res.render('login',{ errlog : 2});
    }
    else
    {
      if(user1[0].password == SHA256(req.body.password))
      {
        res.cookie('username', user1[0].email, { maxAge: 3000000, httpOnly: true });
        res.redirect('/');
      }
      else
      {
        res.render('login',{ errlog : 1})
      }
    }
  });
});


module.exports = router;
