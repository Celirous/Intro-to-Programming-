document.getElementById("aboutMe").innerHTML = "This is <em>your</em> paragraph!";

var thingOne;
var thingTwo;
var thingThree;

document.getElementById("changeList").onclick = newList;

function newList(){
  thingOne = prompt ("Enter a new first thing");
  thingTwo = prompt ("Enter a new second thing");
  thingThree = prompt ("Enter a new third thing");
  updateList();
};

function updateList(){
  document.getElementById("listOne").innerHTML = thingOne;
  document.getElementById("listTwo").innerHTML = thingTwo;
  document.getElementById("listThree").innerHTML = thingThree;
};



