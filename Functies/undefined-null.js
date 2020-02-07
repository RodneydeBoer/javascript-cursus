// undefined for variable
let name

if (name === undefined) {
    console.log('Geef aub een naam op');

} else {
    console.log(name);
}

// undefined voor functie argumenten
// undefined als standaard return waarde van de functie
let vermenigvuldigen = function(num) {
    console.log(num);
}

let resultaat = vermenigvuldigen()
console.log(resultaat);


// null als opgegeven waarde
let leeftijd = 24

leeftijd = null

console.log(leeftijd);