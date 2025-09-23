var words = ["javascript", "monkey", "amazing", "pancake"];
var word = words[Math.floor(Math.random()* words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++){
    answerArray[i] = "_";
};

var remainingLetters = word.length;

while (remainingLetters > 0){
// Show the player their progress
alert(answerArray.join(" "));
// Take input from the player
var guess = prompt("Guess a letter, or click Cancel to stop playing");
if (guess === null) {
    break;
} else if (guess.length !==1) {
    alert("Please enter a single letter.");
} else {
    // Update answerArray and remainingLetters for every correct guess 
    for (var j = 0; j < word.length; j++) {
        if (word[j]=== guess) {
        answerArray[j] = guess;
        remainingLetters--;
        };
       }
    }
// End of the game loop
};
alert(answerArray.join(" "));
alert("GooD JoB! The answer was "+ word);
