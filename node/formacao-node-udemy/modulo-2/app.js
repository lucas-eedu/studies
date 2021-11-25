var http = require('http');

http.createServer(function(req, res) {
   res.end('Resposta do meu servidor');
}).listen(8000);

console.log('Meu servidor está rodando');