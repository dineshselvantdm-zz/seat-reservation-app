
/**
 * Module dependencies.
 */
require('marko/node-require').install();
var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.use(express.compress());
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.use(app.router);
  app.use(express.static('public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
