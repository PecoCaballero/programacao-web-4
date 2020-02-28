var fs = require('fs')

fs.appendFile('arquivo2.txt', 'adicionado: ' + Date.now(), (err, data) => {

});