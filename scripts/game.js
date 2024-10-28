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

// var maxWrongGuesses = bodyParts.length;

// function handleGuess(letter) {
//     if (guessedLetters.includes(letter))
//         return;

//     guessedLetters.push(letter);

//     if (chosenWord.includes(letter)) {
//         for (let i = 0; i < chosenWord.length; i++) {
//             if (chosenWord[i] === letter) {
//                 correctGuesses[i] = letter;
//             }
//         }
//         displayWordProgress();
//         checkWin();
//     } else {
//         wrongGuesses++;
//         revealNextBodyPart();
//         checkLoss();
//     }
// }
// function checkWin() {
//     if (correctGuesses.join('') === chosenWord) {
//         setTimeout(() => alert('Congratulations! You guessed the word!'), 100);
//     }
// }

// function checkLoss() {
//     if (wrongGuesses === maxWrongGuesses) {
//         setTimeout(() => alert(`Game Over! The word was: ${chosenWord}`), 100);
//     }
// }
// const letterElements = document.getElementsByClassName('letter');

// for (let i = 0; i < letterElements.length; i++) {
//     letterElements[i].addEventListener('click', function () {
//         const letter = this.textContent;

//         handleGuess(letter);

//         this.classList.add('disabled');
//     });
// }