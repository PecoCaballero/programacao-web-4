exports.pronto = false;

var b = require("./modulo3b");
console.log('a- dentro de a, b.pronto = %j', b.pronto);

exports.pronto = true;