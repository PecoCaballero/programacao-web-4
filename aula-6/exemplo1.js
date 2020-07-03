const Validator = require('validatorjs')

let dados = {
    email: 'pedro@email.com',
    nome: 'Pedro',
    cpf: '444.555.444-44'
}

const regras = {
    email: 'required|email',
    nome: 'required',
    cpf: 'required|size:14'
}

let validator = new Validator(dados, regras)

console.log(validator.passes());