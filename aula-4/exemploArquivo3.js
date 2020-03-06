var fs = require('fs');

fs.writeFile("arquivo2.txt", "adicionado: " + Date.now() + "\n", function (err) {
  if (err) throw err;
  console.log("Hora adicionada?");
});