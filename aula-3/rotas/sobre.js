const router = require("express").Router();

router.get('/', function(req, res){
    res.send('Indice .js de rotas do SOBRE');
});

router.get('/professor', function(req, res){
    res.send('Sobre o professor: Danilo');
});

module.exports = router;