var http = require('http');
http.createServer(function (req, res){
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    res.end("Hello World via HTTP");
}).listen(8080);
console.log("Servidor já está rodando...")