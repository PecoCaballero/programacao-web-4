const router = require('express').Router()

var carroController = require("../controllers/carroController")

router.get("/", carroController.lista_carros);

router.get("/sobre/:id", carroController.info_carro);

router.get("/cadastrar", carroController.cadastra_carro);

module.exports = router