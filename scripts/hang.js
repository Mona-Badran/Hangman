var bodyParts = [
    { src: 'assets/head.svg', className: 'head' },
    { src: 'assets/body.svg', className: 'body' },
    { src: 'assets/left-hand.svg', className: 'left-hand' },
    { src: 'assets/right-hand.svg', className: 'right-hand' },
    { src: 'assets/left-leg.svg', className: 'left-leg' },
    { src: 'assets/right-leg.svg', className: 'right-leg' }
];
function updateHangman() {
    var hangContainer = document.getElementsByClassName('hang')[0];

    if (wrongGuesses < bodyParts.length) {
        var part = bodyParts[wrongGuesses];
        var partImg = document.createElement('img');
        partImg.src = part.src;
        partImg.className = part.className;
        
        hangContainer.appendChild(partImg);
    }
}
