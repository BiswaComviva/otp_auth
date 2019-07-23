var express = require('express');
var input = require('../public/javascripts/input');

var router = express.Router();

/* GET users listing. */
router.get('/abc', function(req, res, next) {
  // call methods from diff file
    var output=input.callme(req,res);

  res.send(output);
});

module.exports = router;
