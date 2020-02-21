# Implementação de regras de negócio

## Regras de negócio

    Regra de negócio é a lógica que guia o comportamento e define O QUE, ONDE, QUANDO, POR QUE E COMO será feito, além de como o negócio será gerenciado ou governado
    As regras podem assumir muitas formas, de simples decisões booleanas a decisões que envolvem regras de lógica mas complexas.

* Durante a implantação, por vezes, acabam misturadas à questões de implementação
* Em algun casos, "tercerizar" um serviço pode ajudar a evitar isso
  * Uso de framworks
* No nosso caso, vamos utilizar o Express para simplificar o gerenciamento de requisições

## Express

Segundo o próprio Express

    Framework web rápido, flexível e minimalista para Node.js

---

    O Express fornece uma camada fina de recursos fundamentais para aplicações da web, sem obscurecer os recursos do Node.js que você conhece e ama

### Instalação

```npm install express```

### Utilização

```var express = require("express");``` 

```var app = express();```