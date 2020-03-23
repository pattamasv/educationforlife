var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('yuva', { title: 'Express' });
});

router.post('/', function(req, res, next) {

    console.log(req.body.first);
    console.log(req.body.last);
    console.log(req.body.date);
    console.log(req.body.amount);

  });


router.get('/thanks', function(req, res, next) {
    res.send('Thanks you')
  });


module.exports = router;
