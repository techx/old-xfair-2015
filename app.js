var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
var favicon = require('serve-favicon');

app.use(favicon(__dirname + '/public/images/favicon.ico'));

var mongoose = require('mongoose');

var passport = require('passport');
var config = require('./config');
var BasicStrategy = require('passport-http').BasicStrategy;

passport.use(new BasicStrategy(
  function(username, password, done) {
    if (username.valueOf() === config.USERNAME &&
      password.valueOf() === config.PASSWORD)
      return done(null, true);
    else
      return done(null, false);
  }
));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

var mongoURI = process.env.MONGOHQ_URL || "mongodb://localhost/xfair";
var mongoose = require("mongoose");
mongoose.connect(mongoURI);

app.use('/', require('./routes/index'));
app.use('/', require('./routes/resumes'));
app.use('/companies', require('./routes/companies'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'));

module.exports = app;
