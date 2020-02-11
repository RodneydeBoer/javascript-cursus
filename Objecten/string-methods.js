let naam = '   Rodney de Boer    '

// length property
console.log(naam.length);

// convert to upper case
console.log(naam.toUpperCase())

// convert to lower case
console.log(naam.toLowerCase())

// Includes method
let password = 'abc123password098'
console.log(password.includes('password'))

// Trim
console.log(naam.trim());

// challenge area

// isValidPassword()
let isValidPassword = function(password) {
    return password.length > 8 && !password.includes('password')
};
// return true if length > 8 and doesn't contain the word password

console.log(isValidPassword('fwf'));
console.log(isValidPassword('3f34gm3443f3f'));
console.log(isValidPassword('f43f34fpasswordr3f2'));