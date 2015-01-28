var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'xFair 2015' });
});

router.get('/booths', function(req, res) {
  res.render('booths', { title: 'xFair 2015 / Booth Layout' });
});

router.get('/student', function(req, res) {
  res.render('student', { title: 'xFair 2015 / Booth Layout' });
});

router.get('/portal', function(req, res) {
  res.render('portal', { title: 'xFair 2015 / Portal' });
});

router.get('/sponsor', function(req, res) {
    res.status(200).sendFile(__dirname + '/pdf/sponsor.pdf');
});

router.get('/prefair', function(req, res) {
    res.status(200).sendFile(__dirname + '/pdf/prefair.pdf');
});

router.get('/packages', function(req, res) {
    res.status(200).sendFile(__dirname + '/pdf/packages.pdf');
});

router.get('/banquet', function(req, res) {
    res.status(200).sendFile(__dirname + '/pdf/banquet.pdf');
});

module.exports = router;
