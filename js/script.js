var km = parseInt(prompt('inserisci i km che vuoi percorrere'));
var eta = parseInt(prompt('inserisci la tua età'));

var biglietto = 0.21 * km;

// var minorenne = biglietto * 80 / 100;
// console.log(minorenne);

// test 2
var minorenne = biglietto - biglietto * 20 / 100;
console.log(minorenne);





