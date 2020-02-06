let isAccountLocked = false
let gebruikersRol = 'admin'



if (isAccountLocked) {
    console.log("account is vergrendeld")
} else if (gebruikersRol === 'admin') {
    console.log("Welkom admin!")
} else {
    console.log("Welkom !")
}

// uitdagingsruimte

let temp = 0

if (temp <= 0) {
    console.log("Het is erg koud")
} else if (temp => 30) {
    console.log("Het is heet")
} else {
    console.log("Het is lekker weer !")
}