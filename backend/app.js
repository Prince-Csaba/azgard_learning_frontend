require("dotenv").config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./docs/swagger.yml");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const cors = require('cors');
var app = express();

app.use(cors())

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// view engine setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const { fillCourses } = require('./controllers/FillCourses');
const { fillQuotes } = require('./controllers/FillQuotes');
fillCourses();
fillQuotes();

/* app.use('/api', indexRouter); */
app.use('/api', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
