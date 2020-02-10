 let myBook = {
     titel: '1984',
     auteur: 'George Orwell',
     paginaTelling: 326
 }
 console.log(`${myBook.titel} door ${myBook.auteur}`)

 myBook.titel = `Animal Farm`

 console.log(`${myBook.titel} door ${myBook.auteur}`)

 // Challenge area

 // naam, leeftijd, locatie
 let persoon = {
         naam: 'Andrew',
         leeftijd: 27,
         woonplaats: 'Philadelphia'
     }
     //Andres is 27 and lives in Philadelphia
 console.log(`${persoon.naam} is ${persoon.leeftijd} en woont in ${persoon.woonplaats} `);

 //  increase age by 1 and print again
 persoon.leeftijd = persoon.leeftijd + 1

 console.log(`${persoon.naam} is ${persoon.leeftijd} en woont in ${persoon.woonplaats} `);