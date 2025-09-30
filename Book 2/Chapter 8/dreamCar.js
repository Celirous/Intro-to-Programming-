//  typeof will tell you what kind of data type it is. No matter the info, it will tell you 
/*
typeof 8
"number"
var doTheMath = 7 + 8 + 36 + 18 + 12
undefined
typeof doTheMath
"number"
typeof "the cat's favorite toy";
"string" 
typeof automobile
typeof automobile
"undefined" 
*/


// Wokring with objects 

var dreamCar = {
  make: "Cadilac",
  model: "Coupe'deville",
  color: "red",
  year: 1983,
  "bodyStyle": "Luxury Car", 
  price: 7800,
}
// alert("The type of dreamCar is: " + typeof dreamCar);

document.getElementById("priceTag").innerHTML = dreamCar.price;

document.getElementById("modelYear").innerHTML = dreamCar.year; 

document.getElementById("body").style.backgroundColor = dreamCar.color;

document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.year + " " + dreamCar.model;



























