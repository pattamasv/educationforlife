var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('yuva', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    res.render('yuva', { title: 'Express' });
  });

module.exports = router;
