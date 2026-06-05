let randomNumber;
let attempts;

startGame();

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "Attempts: 0";
    document.getElementById("guessInput").value = "";
}

function checkGuess() {
    const guess = Number(document.getElementById("guessInput").value);
    const message = document.getElementById("message");

    if (!guess || guess < 1 || guess > 100) {
        message.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attempts++;
    document.getElementById("attempts").textContent =
        "Attempts: " + attempts;

    if (guess === randomNumber) {
        message.textContent =
            "🎉 Congratulations! You guessed the correct number!";
    }
    else if (guess < randomNumber) {
        message.textContent = " Too low! Try again.";
    }
    else {
        message.textContent = " Too high! Try again.";
    }
}

function restartGame() {
    startGame();
}
