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

