let temp = 4


if (temp >= 20 && temp <= 35) {
    console.log('het is heerlijk weer');
} else if (temp <= 0 || temp >= 40) {
    console.log('ga niet naar buiten');
} else {
    console.log('het weer is mwaa');
}

// challenge area

let isKlantEenVegan = true
let isKlantTweeVegan = false

//  zijn ze beide vegan? biedt alleen vegan aan
//  wanneer er maar 1 gast vegan is? biedt wel opties aan
//  else, het gewone menu

if (isKlantEenVegan && isKlantTweeVegan) {
    console.log('Biedt het veganmenu aan');
} else if (isKlantEenVegan || isKlantTweeVegan) {
    console.log('biedt het vegan & normale menu aan');
} else {
    console.log('biedt het normale menu aan');
}