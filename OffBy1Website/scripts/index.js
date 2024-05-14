"use strict"

console.log("I am working");

window.onload = function (){

let theButton = document.querySelector("#theButton");

theButton.addEventListener("click", displayTimie);
 



}
function displayTime(){
console.log("you clicked theButton");

let theDate = document.querySelector("#theDate");

let theParagraph=document.querySelector("#theParagraph")

console.log(theDate.value);

theParagraph.innerHTML = new Date(theDate.value);

}