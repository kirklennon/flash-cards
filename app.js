var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

db = mysql.createConnection({
	  host: 'localhost',
	  user: 'flashcards',
	  password: 'flashcards',
	  database: 'flashcards',
	  port: 8889
	});

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
