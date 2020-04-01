var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.time("Settime");
  res.render('index', { title: 'Express' });
  console.timeEnd("Settime");
});

module.exports = router;
