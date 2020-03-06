var express = require('express');
var app = express();

app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});


app.get('/', function (req, res) {
    res.send("resposta para o /");
});

app.get('/ab?cd', function (req, res) {
    res.send("Padrão que tem a, b opcional, cd. Utiliza o ?");
});

app.get('/ef+gh', function (req, res) {
    res.send("Padrão que tem e, 1 ou mais f, gh. Utiliza o +");
});


app.get('/ij*kl', function (req, res) {
    res.send("Padrão que tem ij, qualquer string, kl. Utiliza o *");
});




app.listen(8080, function () {
    console.log("Rodando na porta 8080");
});