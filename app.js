// import functions and grab DOM elements
const yellowButton = document.getElementById('yellow-button');
const blueButton = document.getElementById('blue-button');
const pinkButton = document.getElementById('pink-button');

const yellowContainer = document.getElementById('yellow-container');
const blueContainer = document.getElementById('blue-container');
const pinkContainer = document.getElementById('pink-container');

const totalEl = document.getElementById('total');
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');

// initialize state
const hidingPlaces = ['blue', 'yellow', 'pink'];

let correctGuesses = 0;
let totalGuesses = 0;

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);

    return arr[index];
}

function handleGuess(userGuess, correctSpot) {
    resetStyles();
    totalGuesses++;

    const correctHidingPlaceEl = document.getElementById(`${correctSpot}-container`);

    correctHidingPlaceEl.classList.add('face');

    if (userGuess === correctSpot) {
        correctGuesses++;
    }

    totalEl.textContent = totalGuesses;
    winsEl.textContent = correctGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;
}

function resetStyles() {
    yellowContainer.classList.remove('face');
    blueContainer.classList.remove('face');
    pinkContainer.classList.remove('face');
}

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
yellowButton.addEventListener('click', () => {
    const correctSpot = getRandomItem(hidingPlaces);

    handleGuess('yellow', correctSpot);
});

blueButton.addEventListener('click', () => {
    const correctSpot = getRandomItem(hidingPlaces);

    handleGuess('blue', correctSpot);
});

pinkButton.addEventListener('click', () => {
    const correctSpot = getRandomItem(hidingPlaces);

    handleGuess('pink', correctSpot);
});
