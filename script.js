let randomNumber = 70;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById("guessInput").value);
    const message = document.getElementById("message");
    const attemptsDisplay = document.getElementById("attempts");

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        message.textContent = "Congratulations! You guessed the correct number!";
    } 
    else if (guess < randomNumber) {
        message.textContent = "Too low! Try again.";
    } 
    else {
        message.textContent = "Too high! Try again.";
    }

    attemptsDisplay.textContent = "Attempts: " + attempts;
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("guessInput").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "Attempts: 0";
}
