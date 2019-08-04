// Create an array that lists out all of the alphabet options for user to guess. 
var letterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins and losses. They start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessList = []

// Create variables that hold references to the places in the HTML where we want to display things.
var userChoiceText = document.getElementById("guessessofar-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");




// Randomly chooses a letter from letterOptions array. This is the Computer's guess.
var computerGuess = letterOptions[Math.floor(Math.random() * letterOptions.length)];
console.log("Computer Guess is: "  + computerGuess)

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

// Determines which key was pressed.
var userGuess = event.key;

// Decreases Guesses Left by One
guessesLeft--;

// Adds guesses to array
guessList.push(userGuess);
console.log("Guesses: " + guessList);

if (userGuess === computerGuess) {
    wins++;
    guessesLeft = 9;
    guessList = [];
    computerGuess = letterOptions[Math.floor(Math.random() * letterOptions.length)];
    console.log("Computer Guess is: "  + computerGuess);

}

else if (guessesLeft === 0) {
    guessesLeft = 9;
    attemptList = [];
    losses++;
    computerGuess = letterOptions[Math.floor(Math.random() * letterOptions.length)];
    console.log("Computer Guess is: "  + computerGuess);

}
// Displays the user guess, wins, losses, and guesses left
userChoiceText.textContent = "Your Guesses So Far: " + guessList;
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessesLeftText.textContent = "Guesses Left: " + guessesLeft;


}







// This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number




// 1. How do I get all 9 user guesses to print? 
// 2. How do I block user guesses that aren't part of the array?
// 3. How do I prevent computer from changing guess before all nine guess are exhausted?