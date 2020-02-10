  let myBook = {
      titel: '1984',
      auteur: 'George Orwell',
      paginaTelling: 326
  }

  let otherBook = {
      titel: 'A Peoples History',
      auteur: 'Howard Zinn',
      paginaTelling: 723
  }

  let getSummary = function(boek) {
      return {
          summary: `${boek.titel} geschreven door ${boek.auteur}`,
          pageCountSummary: `${boek.titel} heeft ${boek.paginaTelling} bladzijden`
      }
  }
  let bookSummary = getSummary(myBook)
  let otherBookSummary = getSummary(otherBook)

  console.log(bookSummary.pageCountSummary);

  //   Challenge area

  // Create function - take fahrenheit in - return object with all three

  let convertFahrenheit = function(fahrenheit) {
      return {
          fahrenheit: fahrenheit,
          kelvin: (fahrenheit + 459.67) * (5 / 9),
          celsius: (fahrenheit - 32) * (5 / 9)
      }
  }

  let temps = convertFahrenheit(72);
  console.log(temps);