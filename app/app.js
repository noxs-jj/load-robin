// const http = require('http');
//
// const hostname = '127.0.0.1';
// const port = 3000;
//
// var globHostname = null;
// var globPort = null;
//
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end("Hi there! I'm being served from " + globHostname + "!\n");
// });
//
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
//   globHostname = hostname;
//   globPort = port;
// });

//Load express module with `require` directive
var express = require('express')
var app = express()

var globHostname = process.env.HOSTNAME;
// var globPort = null;

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send("Hi there! I'm being served from " + globHostname + "!\n")
})

//Launch listening server on port 8080
app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
