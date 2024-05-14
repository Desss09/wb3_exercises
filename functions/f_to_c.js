"use strict"

function convertFtoC(someTemp){

    //setup varibles for fahrenheit to celsius
    let fahrenheit = someTemp;
    let celsius = (fahrenheit - 32) * 5 / 9;

    //return the value of the calc as output from the function
    return celsius;
}

console.log("converting 212 from F to C:" + convertFtoC(212));
console.log("converting 90 from F to C:" + convertFtoC(90));
console.log("converting 72 from F to C:" +  convertFtoC(72));
console.log("converting 32 from F to C:" +  convertFtoC(32));
console.log("converting 0 from F to C:" + (0));
console.log( "converting -40 from F to C:" + convertFtoC(-40));


function convertCtoF (someTemp){

    let celsius = someTemp;
    let fahrenheit = (celsius * 9 / 5) + 32;

    return fahrenheit;

}

console.log("converting 100  from C to F:" + convertCtoF(100));
console.log("converting 45  from C to F:" + convertCtoF(45));
console.log("converting 19  from C to F:" + convertCtoF(19));
console.log("converting 0  from C to F:" + convertCtoF(0));
console.log("converting -7  from C to F:" + convertCtoF(-7));
console.log("converting -40  from C to F:" + convertCtoF(-40));