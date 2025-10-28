const roundDisplayEl = document.querySelector('#roundDisplay');
const targetNumberEl = document.querySelector('#targetNumber');
const currentNumberEl = document.querySelector('#currentNumber');
const countMovesEl = document.querySelector('#countMoves');
const timeCounter = document.querySelector('#timeCounter');

const plus_100_btn = document.querySelector('#btn_plus_100');
const plus_10_btn = document.querySelector('#btn_plus_10');
const plus_1_btn = document.querySelector('#btn_plus_1');
const minus_100_btn = document.querySelector('#btn_minus_100');
const minus_10_btn = document.querySelector('#btn_minus_10');
const minus_1_btn = document.querySelector('#btn_minus_1');

const message = document.querySelector('#messageArea');

let targetValue = 0;
let currentValue = 0;
let moves = 0;
let round = 1;
const MAX_ROUNDS = 10;
let timeInterval;
let startTime;

let totalMoves = 0;
let totalTime = 0;

function startTimer(){
    if (timeInterval) clearInterval(timeInterval);
    startTime = performance.now();

    timeInterval = setInterval(() => {
        const elapsed = (performance.now() - startTime) / 1000;
        timeCounter.textContent = elapsed.toFixed(2);
    }, 100);
}

function setupNewRound(){
    currentValue = 0;
    moves = 0;
    targetValue = Math.floor(Math.random() * 900) + 100;

    targetNumberEl.textContent = targetValue;
    currentNumberEl.textContent = currentValue;
    countMovesEl.textContent = moves;
    roundDisplayEl.textContent = `Round: ${round}/10`;

    message.textContent = "Press the button and align the number!";
    message.classList.remove('message_success');

    startTimer();
}

// function initializeButtons(){
//     plus_100_btn.addEventListener('click', () => {handleMove(100);});
//     plus_10_btn.addEventListener('click', () => {handleMove(10);});
//     plus_1_btn.addEventListener('click', () => {handleMove(1);});
//     minus_100_btn.addEventListener('click', () => {handleMove(-100);});
//     minus_10_btn.addEventListener('click', () => {handleMove(-10);});
//     minus_1_btn.addEventListener('click', () => {handleMove(-1);});
// }

function handleMove(amount){
    currentValue += amount;
    moves++;

    currentNumberEl.textContent = currentValue;
    countMovesEl.textContent = moves;

    if (currentValue === targetValue){
        roundEnd();
    }
}

function roundEnd(){
    clearInterval(timeInterval)
    const timeTaken = (performance.now() - startTime) / 1000;
    totalMoves += moves;
    totalTime += timeTaken;

    message.textContent = `Success! ${moves} moves.`;
    message.classList.add('message_success');
    round++;

    if (round <= MAX_ROUNDS) {
        setTimeout(setupNewRound, 1500);
    } else {
        message.textContent = "Game Clear! Calulating results..."
        message.classList.add('message_success');

        setTimeout(() => {
            window.location.href = `result.html?moves=${totalMoves}&time=${totalTime.toFixed(2)}`;
        }, 1500);
    }
}

const popupOverlay = document.querySelector('#popupOverlay');
const readyButton = document.querySelector('#readyB');
const countdownOverlay = document.querySelector('#countdownOverlay');
const countdownTimer = document.querySelector('#countdownTimer');

readyButton.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
    countdownOverlay.style.display = 'flex';
    startCountdown();
});

/** 
* @param {HTMLElement} buttonElement
* @param {number} amount
*/
function setupButtonListeners(buttonElement, amount){
    buttonElement.addEventListener('click', () => {
        handleMove(amount);
    });

    buttonElement.addEventListener('mousedown', () => {
        buttonElement.classList.add('is_pressed');
    });
    buttonElement.addEventListener('mouseup', () => {
        buttonElement.classList.remove('is_pressed');
    });

    buttonElement.addEventListener('mouseleave', () => {
        buttonElement.classList.remove('is_pressed');
    });
}

function initializeButtons(){
    setupButtonListeners(plus_100_btn, 100);
    setupButtonListeners(plus_10_btn, 10);
    setupButtonListeners(plus_1_btn, 1);
    setupButtonListeners(minus_100_btn, -100);
    setupButtonListeners(minus_10_btn, -10);
    setupButtonListeners(minus_1_btn, -1);
}


function startCountdown() {
    let count = 3;
    countdownTimer.textContent = count;

    const countdownInterval = setInterval(() => {
        count--;

        if (count > 0) {
            countdownTimer.textContent = count;
        } else if (count === 0) {
            countdownTimer.textContent = "GO!";
        } else {
            clearInterval(countdownInterval);
            countdownOverlay.style.display = 'none';

            initializeButtons();
            setupNewRound();
        }
    }, 1000);
}