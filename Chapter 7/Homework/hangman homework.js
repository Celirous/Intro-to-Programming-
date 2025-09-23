var words = ["rudder", "monkeied", "duck", "amazinged", "details", "phoned"];
var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++){
    answerArray[i] = "_";
};

var remainingLetters = word.length;
var guesses = word.length + 4;

while (remainingLetters > 0 && guesses > 0) {
        // Show the player their progress 
    alert(answerArray.join(" "));
        // Get a guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing");
        if (guess === null){
            break;
        } else if (guess.length !== 1){
            alert("Please enter a single letter");
        } else {
            guesses--;
            guess = guess.toLowerCase();
        // Update answerArray and remainingLetters for every correct guess. 
        for (var j = 0; j < word.length; j++){
            if (word[j] === guess && answerArray[j] === "_") {
                answerArray[j] = guess;
                remainingLetters--;
            };
        };
      };
    // End of game play loop
};
// Show the answer and congratulate the player 
alert(answerArray.join(" "));

if (guesses > 0) {
    alert("Good job! The answer was " + word);
} else {
    alert("Too bad! The answer was " + word);
};

