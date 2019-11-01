const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var globHostname = null;
var globPort = null;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("Hi there! I'm being served from " + globHostname + "!\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  globHostname = hostname;
  globPort = port;
});
