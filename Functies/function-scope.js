// Global scope(temperatuur, temp, andereTemp)
//      Local scope(fahrenheit, celsius)
//              Local scope (hetVriest)

let temperatuur = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 1.8
    if (celsius <= 0) {
        let hetVriest = true
    }
    return celsius
}

let temp = temperatuur(32)
let andereTemp = temperatuur(62)

console.log('de temp is ' + temp + ' celsius');
console.log('de temp is ' + andereTemp + ' celsius')