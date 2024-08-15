const Target=Math.floor(Math.random() * 100) + 1;
const feedbackElement=document.getElementById('feedback');
function checkGuess() {
const Guess=parseInt(document.getElementById('guess').value);
if (isNaN(Guess)) {
    feedbackElement.textContent = "Please enter a valid number.";
    return;
}
if (Guess<Target) {
feedbackElement.textContent = "Too low! Try again.";
} else if (Guess>Target) {
feedbackElement.textContent = "Too high! Try again.";
} else {
feedbackElement.textContent = "Congratulations! You guessed the correct number🥳🎉.";
}
}