let myAccount = {
    naam: 'Rodney de Boer',
    uitgaven: 0,
    inkomen: 0
}

let uitgavenToevoegen = function(account, hoeveelheid) {
    account.uitgaven = account.uitgaven + hoeveelheid
}

// challengearea

// addIncome
let inkomenToevoegen = function(account, hoeveelheid) {
        account.inkomen = account.inkomen + hoeveelheid
    }
    // resetAccount

let resetAccount = function(account) {
    account.uitgaven = 0
    account.inkomen = 0
}

//  getAccountSummary
let getAccountSummary = function(account) {
    let accountTotaal = account.inkomen - account.uitgaven
    return `Account voor ${account.naam} heeft ${accountTotaal}, met een inkomen van ${account.inkomen} en ${account.uitgaven} aan kosten `;
}

// Account for Andrew has $900, $1000 income and $100 expenses

// addincome
inkomenToevoegen(myAccount, 2000);
// addexpense
uitgavenToevoegen(myAccount, 2.70);
// addexpense
uitgavenToevoegen(myAccount, 340);
// getaccountsummary
console.log(getAccountSummary(myAccount));
// resetaccount
resetAccount(myAccount);
// getaccount summary
console.log(getAccountSummary(myAccount));