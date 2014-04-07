#!/app/vendor/node/bin/node

var express = require('express');
var app = express();

app.use(express.logger());
app.use(express.json());

var cors = function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

  next();
}

app.get('/', cors, function(req, res) {
  res.send(200, (new Date).toString());
});

var todos = [];

app.get('/todos', cors, function(req, res) {
  res.json(todos);
});

app.post('/todo', cors, function(req, res) {
  todos.push(req.body);

  res.json(req.body);
});

app['delete']('/todo/:id', cors, function(req, res) {
  for (var i=0; i < todos.length; i++){
    if (todos[i].id === req.params.id){
      todos.splice(i, 1);

      res.send(200, 'OK');
      return;
    }
  }

  res.send(404);
});

app.put('/todo/:id', cors, function(req, res) {
  for (var i=0; i < todos.length; i++){
    if (todos[i].id === req.params.id){
      todos[i] = req.body;

      res.send(200, 'OK');
      return;
    }
  }

  res.send(404);
});

app.options('*', cors, function(req, res) {
  res.send(200, 'OK');
});


var port = process.env.PORT || 5000
app.listen(port);

console.log('Server listening on port %d in %s mode', port, app.settings.env);
