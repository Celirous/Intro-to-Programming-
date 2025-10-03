/*
// switch statements 
// they are basically clear looking if else statements 
var myNumber = prompt("Enter your facourite day of the week!").toLowerCase();
var theResponse; 

switch (myNumber) {
    case "monday":
        theResponse = "Eww, I hate Mondays";
        break
    case "tuesday":
        theResponse = "Taco Tuesday baby!!!";
        break
    case "wednesday": 
        theResponse = "Mini Friday!";
    case "thursday":
        theResponse = "Just one more day!";
    case "friday":
        theResponse = "FRIDAY BAYBEE!!!!!";
    case "saturday":
        theResponse = "The only real off day of the week";
    case "sunday":
        theResponse = "I hate Sundays more than Mondays";
    default: // this is basically the "false" of this statement.
        theResponse = "What day? Are we in the same timeline?"
};
alert(theResponse);
*/

// ---------------------------------------------------------

// all the differ getDate methdos
/*
Method              What It Does

getDate()           Gets the day of the month (1–31).
getDay()            Gets the day of the week as a number (0–6).
getFullYear()       Gets the year (yyyy).
getHours()          Gets the hour (0–23).
getMilliseconds()   Gets the fraction of a second (0–999).
getMonth()          Gets the month (0–11).
getSeconds()        Gets the seconds (0–59).
getTime()           Gets the time, in Unix time (milliseconds since January 1, 1970)
*/

/*
var myDate = new Date();
console.log(myDate);
console.log(myDate.getDay()); // output = 5 (firday)(sunday is index 0)
console.log(myDate.getHours()); // output = 11 
console.log(myDate.getFullYear()); // output = 2025
console.log(myDate.getMonth()); // output = 9 (october)(jan is idex 0 )
*/
/*
// setDate methods 

Method              What It Does
setDate()           Sets the day of the month (1–31).
setDay()            Sets the day of the week as a number (0–6).
setFullYear()       Sets the year (yyyy).
setHours()          Sets the hour (0–23).
setMilliseconds()   Sets the fraction of a second (0–999).
setMonth()          Sets the month (0–11).
setSeconds()        Sets the seconds (0–59).
setTime()           Sets the time, in Unix time (milliseconds since January 1, 1970).
*/

var myNewDate = new Date();
/*
console.log(myNewDate.setMonth(7)); // output - 1754215308524 (computer time, miliseconds since Jan 1, 1970)
console.log(myNewDate); // output - Date Sun Aug 03 2025 12:01:48 GMT+0200 (South Africa Standard Time)
*/
/*
console.log(myNewDate.setDay(2));
console.log(myNewDate);
*/

// --------------------------------------------------------------

// Daily activity things we should make 

var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);


// create a new Date object
var d = new Date();


// call the displayDate() function
displayDate();

function displayDate() {
    todayDate.innerHTML = d.toDateString();
};

function displayActivity() {
    var dayOfWeek = d.getDay();
    var youShould;

    switch (dayOfWeek) {
        case 0: // 0 is the index position of Sunday
            youShould = "Take it easy, you have earned some rest";
            break;
        case 1:
            youShould = "Hate mondays";
            break;
        case 2:
            youShould = "Taco Tuesday baby!!!";
            break;
        case 3: 
            youShould = "Mini Friday!";
            break;
        case 4:
            youShould = "Just one more day!";
            break;
        case 5: 
            youShould = "FRIDAY BAYBEE!!!!!";
            break;
        case 6:
            youShould = "The only real off day of the week";
            break;
        default: // this is basically the "false" of this statement.
            youShould = "What day? Are we in the same timeline?"
    };

    document.getElementById("thingToDo").innerHTML = youShould

};























