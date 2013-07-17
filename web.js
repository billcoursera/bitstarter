var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var fileContents = fs.readFileSync("index.html").toString();



app.get('/', function(request, response) {
  response.send(fileContents);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
