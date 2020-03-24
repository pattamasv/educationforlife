var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('edf', { title: 'Express' });
});

module.exports = router;
