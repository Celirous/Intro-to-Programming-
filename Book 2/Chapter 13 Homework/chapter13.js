//create an event listener for the print button, with a handler function called printView

var printButton = document.getElementById("printable");
printButton.addEventListener("click", printView);

var addButton = document.getElementById("addIt");
addButton.addEventListener("click", addTheThing);

var myList = [];
var myListArea = document.getElementById("wishList");


function addTheThing() {
  var theThing = document.getElementById("iWant");

    addToTheList(theThing);
    resetInput(theThing);
};


/* function addToTheList, which takes one parameter, 
called thingToAdd, pushes it into the myList array, and then 
adds it to myListArea

function addToTheList(thingToAdd) {
    

}
*/
/* function resetInput, which resets the value of the
input field to blank ("")
function resetInput(inputToReset) {

}
*/
/*function printView, which outputs a nicely formatted view of the list */
function printView() {
    
  
};
