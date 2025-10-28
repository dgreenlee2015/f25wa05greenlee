var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let number = Math.random();
  answer = Math.atanh(number);
  res.send('Math.atanh() applied to ' + number + ' is ' + answer);
});

module.exports = router;
