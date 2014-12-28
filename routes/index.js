var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'xFair 2015' });
});

router.get('/booths', function(req, res) {
  res.render('booths', { title: 'xFair 2015' });
});

module.exports = router;
