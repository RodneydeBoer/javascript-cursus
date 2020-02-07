let add = function(a, b, c) {
    return a + b + c;
}

let resultaat = add(10, 3, 8);
console.log(resultaat);

// standaard arguments
let getScoreText = function(name = 'Anoniem', score = 0) {
    return `De gebruiker is ${name} en de score is ${score}`
}
let scoreText = getScoreText();
console.log(scoreText);


// challenge area
// fooicalculator maken

//  2 arguments: totaal & fooiPercentage .2 (20%) 

let rekenFooiUit = function(bedrag = 0, fooipercentage = 20) {
    return `Het bedrag is ${bedrag} euro en de fooi komt uit op ${(bedrag / 100) * fooipercentage} euro`
}

let rekening = rekenFooiUit(5, 20)
console.log(rekening)

let naam = 'Rodney'
console.log(`hey, mijn naam is ${naam} `)