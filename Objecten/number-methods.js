let num = 24.94;

console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 0;
let max = 5;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
// 0 - 10

console.log(randomNum);

// challenge area

// 1-5 - true if correct - false if not correct
let makeGuess = function(guess) {
    let min = 0;
    let max = 5;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return guess === randomNum;
}

console.log(makeGuess(1));