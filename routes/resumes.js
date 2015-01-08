var express = require('express');
var router = express.Router();
var Student = require('../model/student');

var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('G1_xZ9XmFMF6zvNazi7wUA');

var sendEmail = function(name,email){
  var text = "You've just submitted your resume at xfair.";
  var message = {
      "html": "<p>"+text+"</p>",
      "text": text,
      "subject": "Confirmation",
      "from_email": "xfair@mit.edu",
      "from_name": "xFair",
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

router.get("/browse", function(req, res) {
    res.render('browse', {angular: "xfair", title: "Resume Portal"});
});


module.exports = router;