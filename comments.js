//Create web server
var http = require('http');
//Create web server
var server = http.createServer(function(req, res) {
  //Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {'Content-Type': 'text/html'});
  //Set the response body
  res.write('<html><body><h1>Hello, World!</h1></body></html>');
  res.end();
});
//Set the port the web server will listen to
server.listen(3000);
console.log('Server running at http://localhost:3000/');