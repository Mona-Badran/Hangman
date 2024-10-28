// var bodyParts = [
//     'assets/head.svg',
//     'assets/body.svg',
//     'assets/left-hand.svg',
//     'assets/right-hand.svg',
//     'assets/left-leg.svg',
//     'assets/right-leg.svg'
// ];
// const bodyPartClasses = [
//     'head',
//     'body',
//     'left-hand',
//     'right-hand',
//     'left-leg',
//     'right-leg'
// ];

// function updateHangman() {
//     var hangmanImage = document.getElementsByClassName('stand')[0];
//     if (wrongGuesses < bodyParts.length) {
//         hangmanImage.src = bodyParts[wrongGuesses];
//         hangmanImage.className = 'stand';
//         hangmanImage.classList.add(bodyPartClasses[wrongGuesses]);
//     }
// }

var bodyParts = [
    { src: 'assets/head.svg', className: 'head' }, // Make sure this path is correct
    { src: 'assets/body.svg', className: 'body' },
    { src: 'assets/left-hand.svg', className: 'left-hand' },
    { src: 'assets/right-hand.svg', className: 'right-hand' },
    { src: 'assets/left-leg.svg', className: 'left-leg' },
    { src: 'assets/right-leg.svg', className: 'right-leg' }
];
function updateHangman() {
    var hangContainer = document.getElementsByClassName('hang')[0];

    if (wrongGuesses < bodyParts.length) {
        // Create a new image element for the current body part
        var part = bodyParts[wrongGuesses];
        var partImg = document.createElement('img');
        partImg.src = part.src;
        partImg.className = part.className;
        
        // Add the new body part to the container
        hangContainer.appendChild(partImg);
    }
}
