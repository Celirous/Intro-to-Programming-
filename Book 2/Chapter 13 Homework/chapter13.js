//create an event listener for the print button, with a handler function called printView

var addButton = document.getElementById("addIt");
addButton.addEventListener("click", addTheThing);

var printButton = document.getElementById("printable");
printButton.addEventListener("click", printView);

var myList = [];
var myListArea = document.getElementById("wishList");


function addTheThing() {
  var theThing = document.getElementById("iWant");

    addToTheList(theThing);
    resetInput(theThing);
};


/* function addToTheList, which takes one parameter, 
called thingToAdd, pushes it into the myList array, and then 
adds it to myListArea */

function addToTheList(thingToAdd) {
    myList.push(thingToAdd.value);
    var newListItem = document.createElement("li");
    newListItem.innerHTML = myList[myList.length - 1];

    myListArea.appendChild(newListItem);
} 

/* function resetInput, which resets the value of the
input field to blank ("") */
function resetInput(inputToReset) {
    inputToReset.value = "";
};

/*function printView, which outputs a nicely formatted view of the list */

function printView() {
  var listPage = document.getElementById("listPage");
  var formArea = document.getElementById("formArea");

  formArea.style.display = "none";
  listPage.className = "print";
  myListArea.innerHTML = "";
  myList.sort();

  for (var i = 0; i < myList.length; i++) {
    wishList.innerHTML += "<li>" + myList[i] + "</li>";
  };
  // window.print();
};

