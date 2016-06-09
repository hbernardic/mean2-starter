var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyparser = require('body-parser');
var favicon = require('serve-favicon');

var app = express();
app.disable('x-powered-by');

//app.use(favicon(path.join(__dirname, "../public", "favicon.ico")));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/client', express.static(path.join(__dirname, '../client')));

app.use(logger("dev"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


// error handlers
// development error handler
// will print stacktrace
if (app.get("env") === "development") {

    app.use(express.static(path.join(__dirname, '../node_modules')));

    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            error: err,
            message: err.message
        });
    });
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error("Not Found");
    next(err);
});

// production error handler
// no stacktrace leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});

module.exports = app;