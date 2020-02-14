var http = require('http');
var dt = require('./modulo1');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain;charset=utf-8'
    });
    res.write("Data atual: " + dt.dataAtual());
    res.end();
}).listen(8080);