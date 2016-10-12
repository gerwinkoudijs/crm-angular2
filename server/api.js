var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/login', function (req, res) {
  res.send({success: true, auth_token: 'testtokendata'});
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});