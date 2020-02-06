//  Function - input, code , output

let groetGebruiker = function() {
    console.log('Hey maat!')
}

groetGebruiker()
groetGebruiker()
groetGebruiker()

let vermenigvuldigen = function(num) {
    let resultaat = num * num
    return resultaat
}

let waarde = vermenigvuldigen(22)
let andereWaarde = vermenigvuldigen(14)

console.log(waarde);
console.log(andereWaarde);

// challenge area

// converteer fahrenheit naar celsius

//  reken 32 naar 0 en 68 naar 20

// print the converted values
let temperatuur = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 1.8
    return celsius
}

let temp = temperatuur(32)
let andereTemp = temperatuur(62)

console.log('de temp is ' + temp + ' celsius');
console.log('de temp is ' + andereTemp + ' celsius')