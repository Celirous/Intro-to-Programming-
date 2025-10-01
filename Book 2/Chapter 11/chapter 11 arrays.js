/*
// making an array

var people = ["Teddy","Cathy","Bobby"];
console.log(people);

// Modiflying array 
people[1] = "Georgie";
console.log(people);
*/

// Excersize, changing all the values in the array 

var people = ["Mary", "Bobby", "Judy", "Eddie", "Herbie", "Tony"];
var otherPeople= ["Teddy", "Cathy", "G-Burg", "Georgie"];


/*
// toString and valueOf functions here. 
// We are grabbing the peopleIKnow div from HTML and outputting the toString or valueOf from the people. 

document.getElementById("peopleIKnow").innerHTML = people.toString();
document.getElementById("peopleIKnow2").innerHTML = people.valueOf();
*/
/*
// we are taking the people array and the otherPeople array and adding them together in one array 

people = people.concat(otherPeople);
document.getElementById("peopleIKnow").innerHTML = people.toString();
*/

/*
// indexOf, will provide us with index posistion of something specific that we look for within an array. 

people = people.indexOf("Eddie");
document.getElementById("peopleIKnow").innerHTML = people.toString();
*/
/*
// join(), behaves like toString(), however you can speficy how it should look in the output, it is how they are spaced up 

people = people.join(" # ");
document.getElementById("peopleIKnow").innerHTML = people.toString();
*/
/*
// push() method, adding something to the end of the array
people.push("Bobby");

// lastIndexOf() is showing the last index posistion of something added. In this canse bobby is now index 1 and index 6. So getting the last indexof it will be 6 in this case

people = people.lastIndexOf("Bobby");
document.getElementById("peopleIKnow").innerHTML = people.toString();
*/
/*
// pop() will remove the last thing added to the array 

people.pop(); // this will remove the last thing form the array 
people = people.pop(); // this will show you what we have removed 
document.getElementById("peopleIKnow").innerHTML = people.toString();
*/
/*
// push() this will add an element to the end of the array 
people.push("Sandra"); // this will add sandra to the array at the end
document.getElementById("peopleIKnow").innerHTML = people.toString();
*/
/*
people = people.push("Teddy"); // the return value here is now how much there are in the array 
document.getElementById("peopleIKnow").innerHTML = people.toString();
*/
/*
// reverse() this changes the order of the array to a reverse. 
people = people.reverse(); 
document.getElementById("peopleIKnow").innerHTML = people.toString();
*/

// shift() removing first element 
// unshift() adding something to the start of the array 

/*
// shift()
people.shift();
document.getElementById("peopleIKnow").innerHTML = people.toString();
*/
/*
// unshift()
people.unshift("Jason");
document.getElementById("peopleIKnow").innerHTML = people.toString();
*/
/*
// slice() this will let you choose elements from your array to make a new one. 
people = people.slice(0,4);
document.getElementById("peopleIKnow").innerHTML = people.toString();
*/
/*
// sort() this makes the array output in alphabetical order 
people = people.sort()
document.getElementById("peopleIKnow").innerHTML = people.toString();
*/
/*
// splice() this alles you to remove or add things to the array at specific postitions. 
people.splice(1,0,"Cathy");
// what the 1 means is the posistion at what we are adding things 
// what the 0 means is that there is non that we are removeing 
// and then lastly we are adding the "Cathy" 
document.getElementById("peopleIKnow").innerHTML = people.toString();
*/

























