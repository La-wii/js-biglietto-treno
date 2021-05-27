var km = parseInt(prompt('inserisci i km che vuoi percorrere'));
var eta = parseInt(prompt('inserisci la tua età'));
var minorenne;
var over65;
var biglietto = 0.21 * km;


// var minorenne = biglietto * 80 / 100;
// console.log(minorenne);

// test 2
// var minorenne = biglietto - biglietto * 20 / 100;
// console.log(minorenne);


if (eta <= 17) {
    biglietto = biglietto - biglietto * 20 / 100;
}

else if (eta >= 65) {
    biglietto = biglietto - biglietto * 40 / 100;
    
}

document.getElementById("prezzo").innerHTML = biglietto.toFixed(2); 




