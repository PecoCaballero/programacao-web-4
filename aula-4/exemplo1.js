var express = require('express')
var app = express()

app.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

app.get('/', respondeIndice)

function respondeIndice(req, res){
    res.send('Hello World')
}

app.listen(8080, () => {
    console.log("Rodando na porta 8080")
})