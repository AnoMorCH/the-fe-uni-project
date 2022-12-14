let globalCount = 0; 

const pointsForCorrectAnswer = 5;
const pointsForWrongAnswer = -2;

const colorsDict = {
    'красный': 'rgba(250, 69, 69, 0.8)',
    'оранжевый': 'rgba(250, 155, 69, 0.8)',
    'желтый': 'rgba(250, 239, 69, 0.8)',
    'зеленый': 'rgba(110, 250, 69, 0.8)',
    'голубой': 'rgba(69, 246, 250, 0.8)',
    'синий': 'rgba(69, 121, 250, 0.8)',
    'фиолетовый': 'rgba(197, 69, 250, 0.8)'
}

const colorsDictLength = Object.keys(colorsDict).length;

setPointsBrief();
setupMoveFormsBtn();

const stayBtn = document.getElementById('stay');

stayBtn.addEventListener('click', () => {
    hidePopup();
});

const movePopup = document.getElementById('move-popup');

movePopup.addEventListener('click', () => {
    hidePopup();
});

function isScoreEnoughToShowPopup(count, enough) {
    return count >= enough;
}

function showNextButton(nextButtonId) {
    const nextButton = document.getElementById(nextButtonId);
    nextButton.style.display = 'block';
}

function setupMoveBtn(nextTaskNumber) {
    const moveBtn = document.getElementById('move-popup');

    moveBtn.addEventListener('click', () => {
        moveToNextGame(nextTaskNumber);
        hidePopup;
    });
}

function setupMoveFormsBtn() {
    let moveBtnsForm = document.getElementsByClassName('move-hidden');
    moveBtnsForm = Array.from(moveBtnsForm);
    moveBtnsForm.push(document.getElementById('third-move-in-form'));

    for (let i = 0; i < moveBtnsForm.length; i++) {
        moveBtnsForm[i].addEventListener('click', () => {
            moveToNextGame(i + 2);
        });
    }
}

function moveToNextGame(nextGameNumber) {
    const currentGame = document.getElementById(`task${nextGameNumber - 1}`);
    const nextGame = document.getElementById(`task${nextGameNumber}`);

    currentGame.style.display = 'none';
    nextGame.style.display = 'block';
}

function getResetedColorsList(requiredColorsAmount, colorsDictLength) {
    let randomIndexes = [];

    randomIndexes.splice(0, randomIndexes.length);

    for (let i = 0; i < requiredColorsAmount; i++) {
        randomIndexes.push(getNonRepeatedRandomInt(0, colorsDictLength, randomIndexes));
    }

    return randomIndexes;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomDecimal(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.random() * (max - min) + min;
}

function getNonRepeatedRandomInt(min, max, usedColorIndexes) {
    let index = getRandomInt(min, max);

    while (usedColorIndexes.includes(index)) {
        index = getRandomInt(min, max);
    }

    return index;
}

function setPointsBrief() {
    const correctPoints = document.getElementsByClassName('correct-point');
    const wrongPoints = document.getElementsByClassName('incorrect-point');
    const pointsElementsAmount = correctPoints.length;

    for (let i = 0; i < pointsElementsAmount; i++) {
        correctPoints[i].innerText = pointsForCorrectAnswer;
        wrongPoints[i].innerText = pointsForWrongAnswer;
    }
}