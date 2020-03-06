var fs = require('fs')

fs.appendFile('arquivo2.txt', 'adicionado: ' + Date.now(), (err, data) => {
    if (err) throw err;
    console.log("Hora adicionada");
});