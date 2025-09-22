
// Testing stuff

// Basic if and else. If it is like this, do this, if it is not, do this 
/*
var name = "AJ";
    console.log("Hello " + name);
if (name.length > 7 ) {
    console.log("Wow, you have a really long name");
} else {
    console.log("Wow it is shorter than i thought");
};
*/

// Chaining if statements. 
/* This is for making it like a menu that has or does not have the item
var lemonChicken = false;
var beefWithRice = false;
var sweerAndSourPort = true;

if (lemonChicken){
    console.log("Yay, i am having lemon chicken");
} else if (beefWithRice) {
    console.log ("Hell yeah, I love rice and beef");
} else if (sweerAndSourPort){
    console.log ("Love me some Sweet and sour pork!!!");
} else {
    console.log("Sad, i guess ill have noodles");
};
*/

// Testing if and if not
/*
var name = "Jamie"

if (name === "AJ" ) {
    console.log("Hello me!");
  } else if (name !== "AJ") {
    console.log ("Hello stranger");
  };
  */

// Playing with while loops. 
/* our var starts at 0, then we incriment it for each time that it is under 10 sheeps
that have been counted, as long as it is less than 10 keeps, incriment by one and output
a sentince, once it is done, you have another sentence that pops out:
var sheepCounted = 0

while (sheepCounted < 10){
    console.log("I have counted " + sheepCounted + " sheep!");
    sheepCounted++;
}
    console.log("ZZZzzzz");

*/

/* Same with this, for as long as there is a bday that needs to happen under 5 times,
it must increment and output message
var amountOfBDays = 0 

while (amountOfBDays < 5){
    console.log("Hey dude, happy " + amountOfBDays + "th" + " b-day");
    amountOfBDays++;
};
*/

// For loops:
// to do a for loop, you need to understand this; for (setup; condition; increment)
// so if my setup is var bday = 0, then my bday is on 0;
// if my condition is that it needs to be less than 15 it would be bday < 15;
// if my condition is less than, you need to do an incriment. 
/*

for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
    console.log("I have counted " + sheepCounted + " sheep!");
};
console.log("Zzzzz");

for (var birthDay = 0; birthDay < 15; birthDay++) {
    console.log("You have had " + birthDay + " b-days")
};
    console.log("Oh no, you are too old");
*/

/* So i am setting a var, then i need to set "i" because this is the "x" of math,
what i am doing here is making it so that my "i" needs to be more than my set var, 
if it is not, output what needs to be outputted (in this case) "Hello" until the "i" 
is the same as the var, if not the same, it needs to be incrimented. Once it is the same
as the var, it will output "Enough" 
*/
/*
var timesToSayHello = 8
for (i = 0; i < timesToSayHello; i++){
    console.log("Hello");
};
    console.log("Enough");
*/

// This is using a loop with arrays and strings but accessing the data within an array.
/* in this example, we used the "i" to grab the data within the animals array. This 
made it so that we can access each animal one by one by adding an incriment to the "i".
Once it is done bringing up all the animals, it will stop and say "That's all".
*/
/*
var animals = [
    "Lion",
    "Flamingo",
    "Polar Bear",
    "Snake"]

for (var i = 0; i < animals.length; i++){
    console.log("This zoo contains a " + animals[i] + ".")
};
    console.log("That's all!");
*/

// You can do the same with math, we will now use "x" instead of "i", becuase we are actaully doing math. 
// the x needs to x 2 each time it outputs, until the answer is < 10000. 
/*
for (var x = 2; x < 10000; x = x * 2){
    console.log(x);
}
*/

for (var x = 3; x < 10000; x = x * 3){
    console.log(x);
}
