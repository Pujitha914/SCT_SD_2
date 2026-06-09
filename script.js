let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {

    let guess = Number(document.getElementById("guessInput").value);

    if (guess < 1 || guess > 100 || isNaN(guess)) {
        document.getElementById("message").innerHTML =
        "Please enter a number between 1 and 100";
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        document.getElementById("message").innerHTML =
        "Congratulations! You guessed the correct number!";
    }
    else if (guess < randomNumber) {
        document.getElementById("message").innerHTML =
        "Too low! Try again.";
    }
    else {
        document.getElementById("message").innerHTML =
        "Too high! Try again.";
    }

    document.getElementById("attempts").innerHTML =
    "Attempts: " + attempts;
}

function restartGame() {

    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById("guessInput").value = "";
    document.getElementById("message").innerHTML = "";
    document.getElementById("attempts").innerHTML = "Attempts: 0";
}
