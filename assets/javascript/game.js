// Create an array that lists out all of the alphabet options for user to guess. 
var letterOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

// Determines which key was pressed.
var userGuess = event.key;

// Randomly chooses a letter from letterOptions array. This is the Computer's guess.
var computerGuess = letterOptions[Math.floor(Math.random() * letterOptions.length)];

// Create variables that hold references to the places in the HTML where we want to display things.
var userChoiceText = document.getElementById("guessessofar-text");

// Displays the user guess.
userChoiceText.textContent = userGuess;

}
