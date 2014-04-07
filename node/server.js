!#/app/vendor/node/bin/node

var express = require('express');
var app = express();

var APP_ROOT = process.env.APP_ROOT || '/';

app.get(APP_ROOT, function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.send(200, (new Date).toString());
});

var port = process.env.PORT || 5000
app.listen(port);

console.log('Server listening on port %d in %s mode', port, app.settings.env);
