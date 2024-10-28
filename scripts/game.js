var wordBank = [
    'JAVASCRIPT',
    'PYTHON',
    'DEVELOPER',
    'PROGRAM',
    'HTML',
    'MONGODB',
    'KOTLIN'
];
var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var maxWrong = 6;
let wrongGuesses = 0;
var guessedLetters = [];

var correctGuesses = Array(chosenWord.length).fill('_');

function displayWordProgress() {
    var answerSection = document.getElementById('answer-section');
    answerSection.textContent = correctGuesses.join(' ');
}

displayWordProgress();

function handleGuesses(letter) {
    if (guessedLetters.includes(letter))
        return;

    guessedLetters.push(letter);

    if (chosenWord.includes(letter)) {
        for (var i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === letter) {
                correctGuesses[i] = letter;
            }
        }
        displayWordProgress();
        checkWin();
    } else {
        wrongGuesses++;
        console.log("Wrong guesses: " + wrongGuesses); //testing
        updateHangman()
        checkLoss();
    }
}

function checkWin() {
    if (correctGuesses.join('') === chosenWord) {
        setTimeout(() => alert('Congratulations! You guessed the word!'), 100);
    }
}

function checkLoss() {
    console.log("Checking loss: wrongGuesses = " + wrongGuesses + ", maxWrong = " + maxWrong); //testing
    if (wrongGuesses === maxWrong) {
        setTimeout(() => alert('Game Over! The word was: ' + chosenWord), 100);
    }
}

var letterElements = document.getElementsByClassName('letter');

for (let i = 0; i < letterElements.length; i++) {
    letterElements[i].addEventListener('click', function () {
        var letter = this.textContent;

        handleGuesses(letter);

        this.classList.add('disabled');
    });
}