var http = require('http');
var server = http.createServer(function (req,res){
  console.log('Responding to a request');
  res.end('<h1>Dude what up!</h1>');
});
server.listen(3000);
