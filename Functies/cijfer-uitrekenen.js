// studenten score, de hoogst mogelijke score
// 12/20 > you got a C (75%) !
//  A 90-100, B 80-89, C 70-79, D 60-69, F 0-59  %

let grade;

let eindcijfer = function(cijfer) {
    let percentage = (cijfer / 20) * 100;
    if (percentage <= 59) {
        grade = (`Je hebt een F. Je score was ${cijfer}/20`);
    } else {
        if (percentage <= 100 && percentage >= 90) {
            grade = `Proficiat, je hebt een A. je score was ${cijfer}/20`;
        } else if (percentage <= 89 && percentage >= 80) {
            grade = `Proficiat, je hebt een B. je score was ${cijfer}/20`;
        } else if (percentage <= 79 && percentage >= 70) {
            grade = `Proficiat, je hebt een C. je score was ${cijfer}/20`;
        } else {
            grade = `Proficiat, je hebt een D. je score was ${cijfer}/20`;
        }
    }
}
let resultaat = eindcijfer(16)
console.log(grade);