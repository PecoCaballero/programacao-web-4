
const router = require("express").Router();

router.get('/', function(req, res){
    res.send('Oi, mas isso aqui esta no arquivo .js de rotas');
});

router.use('/sobre', require("./sobre"));

module.exports = router;