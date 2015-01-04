var express = require('express');
var router = express.Router();
var Student = require('../model/student');
var passport = require('passport');

router.post("/drop", function(req, res) {
     Student.findOneAndUpdate({
        email: req.body.email
    }, req.body, {
        upsert: true
    }).exec().then(function(result) {
        res.send(result.toObject());
    }, function(err) {
        res.status(500).send({
            error: err.toString()
        });
    });
});

router.post("/search", function(req, res) {
    Student.find(req.body || {}).exec().then(function(results) {
        res.send(results);
    }, function(err) {
        res.status(500).send({
            error: err.toString()
        });
    });
});

router.get("/drop", function(req, res) {
    res.render('drop', {angular: "xfair", title: "Resume Drop"});
});

router.get("/browse", passport.authenticate('basic', { session: false }), function(req, res) {
    res.render('browse', {angular: "xfair", title: "Resume Portal"});
});

module.exports = router;