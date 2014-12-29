var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'xFair 2015' });
});

router.get('/booths', function(req, res) {
  res.render('booths', { title: 'xFair 2015 / Booth Layout' });
});

router.get('/banquet', function(req, res) {
    res.render('banquet', { title: 'xFair 2015 / Banquet' })
})

router.get('/portal', function(req, res) {
    res.redirect('http://portal.mit-xfair.org');
})

module.exports = router;
