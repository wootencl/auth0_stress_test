'use strict';

var port = process.env.PORT || 3000;

// Server and Logs
var express = require('express');
var app = express();
app.use(express.static('www'));

app.get('/*', function(req, res) { 
  res.sendFile("index.html", { root: __dirname + "/../app" });
});

console.log('Listening on port %s', port);
app.listen(port);
