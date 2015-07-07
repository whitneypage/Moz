var express = require('express');
var Mozscape = require('mozscape').Mozscape;
var bodyParser = require('body-parser');

var moz = new Mozscape('mozscape-36e33ccbf8', '76f28509ffc0917e942e547ec04557f4');
var app = express();
var port = 9099;
var UserCtrl = require('./userController.js');

app.use(bodyParser.json());

app.get('/metrics', UserCtrl.getMetrics);

app.listen(port, function() {
  console.log('Listening on port ', port);
});
