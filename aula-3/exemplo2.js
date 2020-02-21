
var express = require("express");

var app = express();

app.use('/est', express.static("estatico"));

app.get('/', function (req, res) {
    res.send('Oi, mas isso aqui está no .js');
});


app.get('/sobre', function (req, res) {
    res.send('Sobre esse programa');
});

app.listen(8080, function () {
    console.log("Rodando na porta 8080");
})