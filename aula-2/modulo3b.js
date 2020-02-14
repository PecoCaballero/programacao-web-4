exports.pronto = false;

var a = require("./modulo3a");
console.log('b- dentro de b, a.pronto = %j', a.pronto);

exports.pronto = true;