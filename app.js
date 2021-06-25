var createError = require("http-errors");
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var authorizationRouter = require('./routes/authorization'); //authorization


var app = express();

app.use(cors(
    // {
    // origin: ["http://localhost:3000"],
    // methods: ["GET", "POST"],
    // credentials: true,
    // }
    )
  );

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', authorizationRouter);

//express sessions for cookie storage
const session = require('express-session');
app.use(session({
    key: 'cookiename',
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    }
    })
  );
  // Anything that doesn't match the above, send back index.html
  app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname + "/client/build/index.html"));
    });
  // Catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404));
  });
  // General error handler
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({ error: err.message });
  });


//Routes
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/', authorizationRouter); //authentication
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;


