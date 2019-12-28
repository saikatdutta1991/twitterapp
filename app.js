const createError = require('http-errors')
const express = require('express') //express module
const path = require('path')
const bodyParser = require("body-parser") //express body parser module


/** creating express app */
var app = express();


/** view engine setup */
app.set('views', path.join(__dirname, 'views'));
/** view engine setup end */

/** cross domain api call */
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
	res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

	next();
});
/** cross domain api call end*/

/** setup body parsers */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/** setup body parsers end*/


/** enable access to public folder through browser */
app.use(express.static(path.join(__dirname, 'public')));


/** registering routes */
var indexRouter = require('./routes/index');
var twitterRouter = require('./routes/twitter');
app.use('/', indexRouter);
app.use('/api/v1/twitter', twitterRouter);
/** registering routes end*/

/** catch 404 and forward to error handler */
app.get('*', function(req, res){
	res.status(404).sendFile(__dirname + '/views/error.html');
});

/** exporting whole express app module */
module.exports = app;