
var express = require("express");

var app = express();

app.get('/', function (req, res) {
    res.sendFile(
        './index.html',
        {
            root: '/home/acer/projects/programacao-web-4/aula-3'
        }
    );
});

app.listen(8080, function () {
    console.log("Rodando na porta 8080");
})