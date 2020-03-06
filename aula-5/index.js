var express = require('express'),
    i18n = require('i18n'),
    app = module.exports = express();

i18n.configure({
    locales: ['en', 'pt', 'de'],

    directory: __dirname + '/locales'
})

app.use(i18n.init);

app.get('/', (req, res) => {
    console.log(req.acceptsLanguages())
    res.send(res.__('Hello World') + " " + res.__('person'))
});

if(!module.parent){
    app.listen(3000)
    console.log("Rodando na porta 3000")
}