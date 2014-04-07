#!/app/vendor/node/bin/node

var express = require('express');
var app = express();

app.use(express.logger());
app.use(express.json());

var APP_ROOT = process.env.APP_ROOT || '/';

var cors = function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');

  next();
}

app.get(APP_ROOT, cors, function(req, res) {
  res.send(200, (new Date).toString());
});

var todos = [];

app.get(APP_ROOT + 'todos', cors, function(req, res) {
  res.json(todo);
});

app.post(APP_ROOT + 'todo', cors, function(req, res) {
  todos.push(req.body);

  res.json(req.body);
});

app.options('*', cors, function(req, res) {
  res.send(204);
});


var port = process.env.PORT || 5000
app.listen(port);

console.log('Server listening on port %d in %s mode', port, app.settings.env);
