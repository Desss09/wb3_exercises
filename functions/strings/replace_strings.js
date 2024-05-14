"use strict"

let message = "Our corporate offices are located in Dallas";
let newText = message.replace("Dallas", "Austin");

console.log (newText);

let text= "our corporate offices are located in Dallas";
let result = text.replace(/DALLAS/i, "Austin");
console.log(result);

