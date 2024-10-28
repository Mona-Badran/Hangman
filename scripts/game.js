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
var wrongGuesses = 0;
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
        checkLoss();
    }
}

function checkWin() {
    if (correctGuesses.join('') === chosenWord) {
        alert('Congratulations! You guessed the word!');
    }
}

function checkLoss() {
    if (wrongGuesses === maxWrongGuesses) {
        alert('Game Over! The word was: ' + chosenWord);
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