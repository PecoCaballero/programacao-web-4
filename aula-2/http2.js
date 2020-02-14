var http = require('http');
var url = require('url');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain;charset=utf-8'
    });
    var q = url.parse(req.url, true).query;
    var txt = "Estamos no mês de " + q.mes + " de " + q.ano;
    res.end(txt);
}).listen(8080);


console.log("http://localhost:8080/?ano=2020&mes=Fevereiro")