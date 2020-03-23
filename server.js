var http = require('http');
var fs = require('fs');
fs.readFile('./home.html', function(err, html){
    http.createServer(function(request, response){
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(3000, '127.0.0.1');
})