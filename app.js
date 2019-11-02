var express = require('express');
var app = express();

const globHostname = process.env.HOSTNAME;

app.get('/', function (req, res) {
  res.status(200);
  res.send("Hi there! I'm being served from " + globHostname + "!\n");
})

app.get('/healthcheck', function (req, res) {
  res.status(200);
  res.send("ok\n");
})

app.listen(3000, function () {
  console.log('App listening on port 3000!');
})
