const router = require('express').Router()

router.get('/', (req, res) => {
    res.send("Bem vindo ao sistema")
})