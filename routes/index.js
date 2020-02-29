var express = require('express');
var router = express.Router();
var variables = require('./variables');


router.get('/', function(req, res, next) {
  res.render('home',{user:variables.viewEmail()});
  console.log(req.connection.remoteAddress)
});
router.get('/logout',function (req,res) {
  variables.updateEmail('');
  res.redirect('/');
});

module.exports = router;
