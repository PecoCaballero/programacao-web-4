var express = require('express');
var app = express();


app.use("/", require("./rotas/indexRotas"))



app.listen(8080, function () {
  console.log("Rodando na porta 8080 :)");
});