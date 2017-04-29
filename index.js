var http = require('http');
var fs=require('fs');
/*createServer takes in function argument
that will log a message in the callback
*/
var server = http.createServer(function(reg, res) {
  console.log('Responding to a request');
  var url = req.url;

  var fileName = 'index.html';
  if(url.length >1){
    fileName = url.substring(1);
  }
  console.log(fileName);
  //readFile will take the filename and a callback
  //sent the contents of the file app/index.html instead of html text through res.end
  fs.readFile('app/index.html',function(err,data){
    res.end(data);
  })
});
//server is listening on port 3000
server.listen(3000);
