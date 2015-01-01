var express = require('express');
var router = express.Router();
var passport = require('../config/passport.js');

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
