// ---------------------- Making variables ----------------------
/*
var book;
var myFirstName;
var favoriteFood;
var birthday;
var timeOfDay;
*/

/*
// Variables need to begin with -
letters
underscore
dollar sign $
other symbols are not allowed. 
*/
// Words we CANNOT use for variables. 
/*
var break = "Broken"
var case = "CD Cases"
var super = "Powers"
*/

// ---------------------- Storing data in variables (code reads from top to bottom); ----------------------
/*
var book
book = "Java script for kids for dummies";
console.log(book);

book = "The call of the wild";
console.log(book);
*/

//---------------------- Understadning data types ----------------------

// ---------------------- String type - this holds text and raw data 

var book
book = "Java script for kids for dummies"; /*- this is string type. */
console.log(book.length);
console.log("Java script for kids for dummies".length); //these 2 are the same thing just to show you. 
// So string types can tell you how much "length" this data has 

// The string can also check the index (location) of the info. 

var string = "I am a string".indexOf("am");
    console.log(string);
// the console here will say "2" as that is the position of "am" 

var string = "I am a string".indexOf("I");
    console.log(string);
// the console will say "0" because "i" is the first posistion (it occupies a position)


// ---------------------- Number types 

var numberTest = "10" + 10;
console.log(numberTest);
// this will output 1010 because the number type is a value of data, but the + 10 is just number 10

var numberTest = 10 / "10";
console.log(numberTest);
// this will output 1 because it works as 10/10 which is the value of 1. 
// Javascrip will assume that you mean the second 10 should be a normal number.

// ---------------------- Boolean types 

console.log(1 < 10) // Is 1 less than 10? (output true)
console.log(100 > 2000) // Is 100 greater than 2000? (output false)
console.log(2 === 2) // Is 2 exactly equal to 2? (output true)
console.log(false === false) // Is false exactly equal to false? (output true)
console.log(40 >= 40) // Is 40 greater than or equal to 40? (output true)

// JavaScript also considers the following values to be false:
console.log(Boolean(0));
console.log(Boolean(""));

// ---------------------- no value types 

// it will output as null


//---------------------- Prompt users ----------------------

// ---------------------- Storing data from user 
var myName = prompt("What is your name?"); // IT will now save the info that you put into the promt in the myName var
console.log(myName);

// ---------------------- responding to the user 
/*
alert("Good job!")
*/ 
/*
alert(37 * 37); // this just outputs the data on the alert you give the user
*/

var firstName = myName;
var yourScore = 30;

alert("Hi " + firstName + ". Your current score is " + yourScore + "!");


// ---------------------- Object data type 

var truck = {
    "Colour": ["Yellow", "Pink", "Blue"],
    Price: ["R158", "R22"],
    "drive": function(){
        console.log("I am driving a truck");
    }
};

console.log(truck.Colour);
console.log(truck["Colour"]);
truck.drive();

// What we are about to do now is output on the web page instead of the console. 

document.write("Hi mom, look at me, my name is " + myName + "!<br>");
document.write("<h1>333 + 100</h1>");

//  Combining input and output. (we have done this by taking the prompt and adding that info to our lines)

var toName = myName; // This "myName" comes from the prompt at the beggining 
var fromName = prompt("Please enter sender name")
var letterBody = "We are pleased to inform you that your song, \'Can\'t stop coding, has been awared one of the best selling songs of all time";

document.write("Dear " + toName + "<br><br>");
document.write(letterBody + "<br><br>");
document.write("Sincerely, <br>");
document.write(fromName);





