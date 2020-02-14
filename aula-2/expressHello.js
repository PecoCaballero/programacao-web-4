var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Hello World via <b>Express</b>');
});

app.listen(8001, () => {
    console.log('Express rodando na porta 8001');
});