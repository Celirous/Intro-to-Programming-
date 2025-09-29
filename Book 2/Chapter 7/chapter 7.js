
document.getElementById("lefteye").style.backgroundColor = "orange";

// document.getElementById("head").style.transform = "rotate(15deg)";

// Put a 2‐pixel‐wide, solid black border around his body.
document.getElementById("body").style.border = "4px yellow dotted";

// Round the corners of his mouth.
document.getElementById("mouth").style.borderRadius = "4px";

// Put yellow dots around his right eye.
document.getElementById("righteye").style.border = "4px yellow solid";

// Change his left arm’s color.
document.getElementById("leftarm").style.backgroundColor = "brown";

// Change the text color.
document.getElementById("body").style.color = "orange";

// Give Douglas hair.
document.getElementById("head").style.borderTop = "9px black solid";


// ✓✓Tilt Douglas’s head to the other side.
document.getElementById("head").style.transform = "rotate(345deg)";

// ✓✓Make Douglas’s nose round.
document.getElementById("nose").style.borderRadius = "15px";

// ✓✓Make Douglas’s right arm green.
document.getElementById("rightarm").style.backgroundColor = "green";

// ✓✓Make Douglas’s lips pink.
document.getElementById("mouth").style.backgroundColor = "pink";



// Animating the robot

// Different events 
/*
• click: The user clicks the mouse.
• submit: A form is submitted.
• drag: An element is being dragged.
• drop: An element has been dropped after being dragged.
• copy: The user has copied content.
• paste: The user pastes content.
• mouseover: The mouse passes over an element.
• load: The page loads.
*/


var rightEye = document.getElementById("righteye");
var leftEye = document.getElementById("lefteye");
var leftArm = document.getElementById("leftarm");

rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown); 
leftArm.addEventListener("click", moveRightLeft);

// the e here is the event object, which in this case is "click"

function moveUpDown(e) {
  var robotPart = e.target;
  var top = 0;

  var id = setInterval(frame, 10) // draw every 10ms

  function frame() {
    robotPart.style.top = top + "%";
    top++;
    if (top === 20) {
      clearInterval(id);
    };
  };
};

function moveRightLeft(e) {
  var robotPart = e.target;
  var left = 0;

  var id = setInterval(frame, 10) // draw every 10ms

  function frame() {
    robotPart.style.left = left + "%";
    left++;
    if (left === 70) {
      clearInterval(id);
    };
  };
};















