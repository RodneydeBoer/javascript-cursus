//  Lexical scope (static scope)
//  Global scope - buiten alle codeblocks
//  Local Scope - valt binnen een functie(codeblock)


// Global scope (varOne)
//  Local scope (varTwee)
//       Local scope (varVier)
//  Local scope (varDrie)

let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwee = 'varTwee'
    console.log(varTwee);

    if (true) {
        let varVier = 'varVier'
    }
}

if (true) {
    let varDrie = 'varDrie'
}

console.log(varTwee);