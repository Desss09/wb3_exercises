"use strict"

function getSocSecTax(grossPay) {

let withheldAmount= grossPay * (6.2 / 100);
return withheldAmount;

}

function getMedicareTax(grossPay){

let withhheldAmount = grossPay * (1.45 / 100);
return withheldAmount;

}

function getFederalTax (grossPay, code){

let taxRate = 0;
if(code===0){
taxRate = 23/100;
}
else if (code === 1){

    taxRate = 21/100;
}else if (code== 2);
 





"use strict";
let a = 4;
function test3() {
 a = 3;
 console.log("a = " + a);
}
test3();
console.log("a = " + a);


}