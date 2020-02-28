var express = require('express')
var app = express()

app.use('/usuario/:id', (req, res) => {
    res.send('Acessado pelo usuario: ' + req.params.id);
})

app.use('/local/:estado/:cidade', (req, res) => {
    console.log(req.params);
    res.send('Informacoes sobre: ' + req.params.cidade);
})

app.listen(8080, () => {
    console.log("Rodando na porta 8080")
})