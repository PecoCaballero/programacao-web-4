var express = require('express')
var app = express()

app.use('/user/:id', (req, res, next) => {
    console.log('o usuario ' + req.params.id + ' requisitou: ' + req.originalUrl)
    next()
})

app.use('/user/:id', (req, res, next) => {
    console.log('Request Type: ', req.method);
    res.send('Ola: ' + req.params.id);
    next()
})

app.listen(8080, () => {
    console.log("Rodando na porta 8080")
})