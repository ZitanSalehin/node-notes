var http = require('http');

var nodeServerWithPages = http.createServer(function(req,res){
 var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
 console.log(path);
 switch(path) {
 case '':
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Homepage');
 break;
 case '/about':
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('About');
 break;
 default:
 res.writeHead(404, { 'Content-Type': 'text/plain' });
 res.end('Not Found');
 break;
 }
}).listen(3000);
console.log('Server started on localhost:3000; press Ctrl-C to terminate....');

module.exports = nodeServerWithPages;