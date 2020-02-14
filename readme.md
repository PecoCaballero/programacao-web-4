# Programação Web 4

Anotações a respeito de PW4. Contempla Node.js

## Node.js

Node.js é um servidor, não um framework

Node.js executa código em uma única thread

Retornos de chamadas API são empilhadas na **task queue** e o **event loop** coloca o callback (se existente) da função de volta na pilha para ser executado pelo node. [Video de referencia](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
