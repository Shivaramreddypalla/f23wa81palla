var express = require('express');
var router = express.Router();

var random = Math.floor(Math.random() * 100);
var rand = Math.floor(Math.random() * 10);
var num1 = 0;
var num2 = 0;
var num3 = 0;

router.get('/', function (req, res, next) {

  num1 = Math.imul(random,rand);
  num2 = Math.log(random);
  num3 = Math.log10(random);

  res.send(`imul applied to (${random}, ${rand}) is ${num1}
    <br> <br> log applied to ${random} is ${num2}
    <br> <br> log10 applied to ${random} is ${num3}`);

});

module.exports = router