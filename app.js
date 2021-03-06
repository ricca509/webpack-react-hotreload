var express = require('express');
var path = require('path');
var logger = require('morgan');
var express = require ('express');
var webpack = require ('webpack');
var webpackDevMiddleware = require ('webpack-dev-middleware');
var webpackHotMiddleware = require ('webpack-hot-middleware');
var config = require ('./webpack.dev.config');

var compiler = webpack(config);
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));

// Renders the index page
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true }
}));

app.use(webpackHotMiddleware(compiler));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
