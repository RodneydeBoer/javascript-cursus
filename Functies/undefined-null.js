// undefined for variable
let name

if (name === undefined) {
    console.log('Geef aub een naam op');

} else {
    console.log(name);
}

// undefined voor functie argumenten

let vermenigvuldigen = function(num) {
    console.log(num);
}

let resultaat = vermenigvuldigen()
console.log(resultaat);