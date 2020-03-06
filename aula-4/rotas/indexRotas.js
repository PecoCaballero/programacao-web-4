const router = require('express').Router()

router.get('/', (req, res) => {
    res.send("Bem vindo ao sistema")
})

router.use("/carro", require("./carroRotas"))

router.get('*', function (req, res) { 
   res.send("Erro na rota"); 
});

 module.exports = router;