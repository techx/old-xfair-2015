var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'xFair 2016' });
});

router.get('/booths', function(req, res) {
  res.render('booths', { title: 'xFair 2016 / Booth Layout' });
});

router.get('/student', function(req, res) {
  res.render('student', { title: 'xFair 2016 / Booth Layout' });
});

router.get('/portal', function(req, res) {
  res.render('portal', { title: 'xFair 2016 / Portal' });
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

// router.get('/dymo', function(req, res) {
//     res.status(200).sendFile(__dirname + '/techfair-checkin.zip');
// });

router.get('/map', function(req, res) {
    res.status(200).sendFile(__dirname + '/pdf/map.pdf');
});

router.get('/krabs', function(req, res) {
    res.render('index2', { title: 'xFair 2016' });
});

module.exports = router;
