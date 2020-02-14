var http = require('http');
var url = require('url');
var math = require('./modulo2');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain;charset=utf-8'
    });
    var q = url.parse(req.url, true).query;
    var txt = `O quadrado de ${q.number} é ${math.square(q.number)}`;
    res.write(txt);
    res.end();
}).listen(8080);