var express = require('express');
var router = express.Router();
var Student = require('../model/student');
var passport = require('passport');

var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('G1_xZ9XmFMF6zvNazi7wUA');

var sendEmail = function(name,email){
    var emailHtml = "<p>Hi " + name + ",</p>" +
    "<p>Thanks for submitting your resume! Just a reminder, xFair is <b>February 2, 2015 from 10am - 4pm</b>. If you're looking for an opportunity, make sure to also bring hard copies of your resume. Even if you aren't, we'd still love to see you there -- companies and students alike will be showcasing cutting-edge demos and products!</p>" +
    "<p>Check out our <a href='http://xfair.mit.edu'>website</a> and <a href='https://www.facebook.com/MITxFair'>Facebook page</a> for updates and more information!</p>" +
    "<p>Cheers,<br>xFair Team 2015</p>"; 

    var message = {
        "html": emailHtml,
        // "text": text,
        "subject": "Confirmation",
        "from_email": "xfair@mit.edu",
        "from_name": "xFair Team",
        "to": [{
                "email": email,
                "name": name,
                "type": "to"
            }]
    };
    var async = true;
    mandrill_client.messages.send({"message": message, "async": async}, function(result) {
        console.log(result);
        /*
        [{
                "email": "recipient.email@example.com",
                "status": "sent",
                "reject_reason": "hard-bounce",
                "_id": "abc123abc123abc123abc123abc123"
            }]
        */
    }, function(e) {
        // Mandrill returns the error as an object with name and message keys
        console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
        // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
    });
};

router.post("/drop", function(req, res) {
     Student.findOneAndUpdate({
        email: req.body.email
    }, req.body, {
        upsert: true
    }).exec().then(function(_result) {
        var result = _result.toObject();
        sendEmail(result.name,result.email);
        res.send(result);
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

