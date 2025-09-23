/*
// Functions

var ourFirstFunction = function () {
  console.log("Hello world!");
};

ourFirstFunction();

// Testing
var sayHelloTo = function (name) {
  console.log("Hello " + name + "!");
};
sayHelloTo("AJ");
sayHelloTo("Johnny");

//

var drawCats = function (howMnayTimes) {
  for (var i = 0; i < howMnayTimes; i++) {
    console.log(i + " =^.^= ");
  }
};

drawCats(2);

// You can stack mulitple arguments.

var printMulitpleTimes = function (howMnayTimes, whatToDraw) {
  for (var i = 0; i < howMnayTimes; i++) {
    console.log(i + " " + whatToDraw);
  }
};

printMulitpleTimes(3, "xD");
printMulitpleTimes(4, 12);
printMulitpleTimes(3, ":)");

// Returning values from function

var double = function (number) {
  return number * 2;
};

console.log(double(10));
console.log(double(5) + double(6));
console.log(double(double(3)));

var triple = function (number) {
  return number * 3;
};
console.log(triple(100));

*/

// Using functions to pick a random word
/*
var randomWords = ["Planet", "Worm", "Flower", "Computer"];

randomWords[Math.floor(Math.random() * randomWords.length)];

var pickRandomWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};

// pickRandomWord(randomWords);
console.log(pickRandomWord(randomWords));
*/

// A New random insult generator
/*
var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

var randomString =
  "Your " +
  pickRandomWord(randomBodyParts) +
  " is like a " +
  pickRandomWord(randomAdjectives) +
  " " +
  pickRandomWord(randomWords);

console.log(randomString);
*/

/*
generateRandomInsult = function () {
  var randomBodyParts = ["Face", "Nose", "Hair"];
  var randomAdjectives = ["Smelly", "Boring", "Stupid"];
  var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

  // Join all the random strings into a sentence:

  var randomString =
    "Your " +
    pickRandomWord(randomBodyParts) +
    " is like a " +
    pickRandomWord(randomAdjectives) +
    " " +
    pickRandomWord(randomWords);

  return randomString;
};

console.log(generateRandomInsult());
 */

/*
var fifthLetter = function (name) {
  if (name.length < 5) {
    return "Your name is too short";
  }
  return "The Fith letter of your name is " + name[4] + ".";
};
console.log(fifthLetter("AJ"));
*/

var medalForScore = function (score) {
  if (score < 3) {
    return "Bronze";
  }
  if (score < 7) {
    return "Silver";
  }
  return "Gold";
};

console.log(medalForScore(10));
