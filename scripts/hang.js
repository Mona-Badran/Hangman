var bodyParts = [
    'assets/head.svg',
    'assets/body.svg',
    'assets/left-hand.svg',
    'assets/right-hand.svg',
    'assets/left-leg.svg',
    'assets/right-leg.svg'
];
const bodyPartClasses = [
    'head',
    'body',
    'left-hand',
    'right-hand',
    'left-leg',
    'right-leg'
];

function updateHangman() {
    var hangmanImage = document.getElementsByClassName('stand')[0];
    if (wrongGuesses < bodyParts.length) {
        hangmanImage.src = bodyParts[wrongGuesses];
        hangmanImage.className = 'stand'; // Reset to just the stand class
        
        // Add the new body part class
        hangmanImage.classList.add(bodyPartClasses[wrongGuesses]);
    }
}

