let fahrenheit = 32 //  32 fahrenheit is 0 celsius en 273.15k

//  het calculeren van celsius en het opslaan in celsius variabele
let celsius = (fahrenheit - 32) / 1.8;


//  het calculeren van kelvin en het opslaan in kelvin variabele
let kelvin = ((fahrenheit - 32) / 1.8) + 273.15;


// printen van de temperatuur
console.log("Temperatuur is " + celsius + ' graden celius');
console.log("Temperatuur is " + kelvin + ' kelvin');