const words = ["tree", "wind", "fire", "rock", "moon", "star", "rain", "snow", "leaf", "sand", "wolf", "bird", "lamp", "book", "gold", "milk", "fish", "door", "ring", "cake", "frog", "dust", "coin", "wine", "sock", "pine", "hall", "boot", "ship", "cave"];

let secretWord = words[Math.floor(Math.random() * words.length)].split('').join('').toLowerCase();
const maxGuesses = 10;
let guesses = [];
let gameOver = false;

const checkButton = document.querySelector('.check_button');
const guessInput = document.querySelector('.guess_input');
const historyList = document.querySelector('.history_list');

checkButton.addEventListener('click', function() {
    if (gameOver) return;

    const userGuess = guessInput.value.trim().toLowerCase();
    if (userGuess === "") {
        alert("Please enter a word.");
        return;
    }

    if (userGuess.length > 4){
        alert("Please enter a 4-letter word.");
        return;
    }

    guesses.push(userGuess);
    updateHistory();

    let feedback = "";
    let match = 0;
    for (let i = 0; i < userGuess.length; i++) {
        if (userGuess[i] === secretWord[i]) {
            match++;
        }else{
             feedback += "_";
        }
    }
    if (match > 0){
        alert(`You have ${match} letter(s) correct in the right position.`);
    } else if (match >= 1){
        alert(`You have ${feedback} letter(s) correct but in the right position.`);
    }else{
        alert("No letters correct.");
    }

    if (userGuess === secretWord){
        alert(`You got it! The word was '${secretWord}'`);
        gameOver = true;
        return;
    }

    if (userGuess === secretWord){
        alert(`You got it! The word was '${secretWord}'`);
        gameOver = true;
        return;
    } else if (guesses.length >= maxGuesses){
        alert(`Too many guesses! Game Over`);
        gameOver = true;
        return;
    }

    guessInput.value = "";
});
// Function to update guess history
function updateHistory() {
    historyList.innerHTML = "";
    guesses.forEach(function(guess, index) {
        const li = document.createElement('li');
        li.textContent = `Guess ${index + 1}: ${guess}`;
        historyList.appendChild(li);
    });
}
const restartButton = document.querySelector('.restart_button');
restartButton.addEventListener('click', function() {
    secretWord = words[Math.floor(Math.random() * words.length)].split('').join('').toLowerCase();
    guesses = [];
    gameOver = false;
    guessInput.value = "";
    updateHistory();
});
