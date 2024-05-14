"use strict"


function displayMailingLabel(name,address,city,state,zip){

    console.log(name);
    console.log(address);
    console.log(`${city},${state} ${zip}`);

    //this is how you would do this with string concatenation
    //console.log(city + "," + state + " "+ zip);

}



//use the above functions
displayMailingLabel("Destiny","123 w earle Ave", "Warren", "OH" , 44512);


function addNumber(num1, num2){
    console.log(num1+num2);
  }
   
addNumber(25,75)

function displayReceipt( totalDue, amountPaid){

if (totalDue === 29.99);

    if (amountPaid === 40 );

        console.log("totalDue is 29.99 and amountPaid is 40 then changeDue is 10.01 ")
}

displayReceipt(29.99-40)