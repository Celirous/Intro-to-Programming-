// var alphabet = "abcdefghijklmnopqrstuvwxyz";
// var randomString = "";
// var stringLength = 6;

// for (var i = 0; i < stringLength; i++) {
//       randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
//     };

// console.log(randomString);


// I have no idea why this works. 

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomString = "";
var i = 0;

while (i < 6){
  randomString += alphabet[Math.floor(Math.random() * alphabet.length)]; i++
}; 
console.log(randomString);