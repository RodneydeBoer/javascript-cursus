let add = function(a, b, c) {
    return a + b + c;
}

let resultaat = add(10, 3, 8);
console.log(resultaat);

// standaard arguments
let getScoreText = function(name = 'Anoniem', score = 0) {
    return 'Name: ' + name + ' & Score: ' + score
}
let scoreText = getScoreText();
console.log(scoreText);


// challenge area
// fooicalculator maken

//  2 arguments: totaal & fooiPercentage .2 (20%) 

let rekenFooiUit = function(bedrag = 0, fooipercentage = 20) {
    let fooiBedrag = (bedrag / 100) * fooipercentage
    return 'Het bedrag is: ' + bedrag + ' en de fooi is: ' + fooiBedrag
}

let rekening = rekenFooiUit(5, 20)
console.log(rekening)