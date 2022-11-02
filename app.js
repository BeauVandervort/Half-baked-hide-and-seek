// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

// initialize state
const hidingPlaces = ['tree', 'shed', 'boulder'];

let wins = 0;
let total = 0;

shedButton.addEventListener('click', () => {
    total++;
    resethidingPlaces();
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'shed');
    if (hidingSpot === 3) {
        wins++;
        shedContainer.classList.add('reveal');
    } else if (hidingSpot === 1) {
        treeContainer.classList.add('reveal');
    } else {
        boulderContainer.classList.add('reveal');
    }
    displayResults();
});

treeButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'tree');
    if (hidingSpot === 1) {
        wins++;
        shedContainer.classList.add('reveal');
    } else if (hidingSpot === 3) {
        treeContainer.classList.add('reveal');
    } else {
        boulderContainer.classList.add('reveal');
    }
    displayResults();
});

boulderButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'boulder');
    if (hidingSpot === 2) {
        wins++;
        shedContainer.classList.add('reveal');
    } else if (hidingSpot === 1) {
        treeContainer.classList.add('reveal');
    } else {
        boulderContainer.classList.add('reveal');
    }
    displayResults();
});

function resethidingPlaces() {
    shedContainer.classList.remove('reveal');
    treeContainer.classList.remove('reveal');
    boulderContainer.classList.remove('reveal');
}
// reset the styles
// then increment the guesses
// then grab the appropriate container element for the correct guess from the DOM
// then add the face class to that element so that the face shows up
// then if the user guess is correct, increment the correct guesses
// update the DOM to show this change to the user (including the losses, not tracked directly in state)
``;
function displayResults() {
    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
    totalEl.textContent = total;
}
