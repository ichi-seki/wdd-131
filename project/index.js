const roundDisplayEl = document.querySelector('#roundDisplay');
const targetNumberEl = document.querySelector('#targetNumber');
const currentNumberEl = document.querySelector('#currentNumber');
const countMovesEl = document.querySelector('#countMoves');
const timeCounter = document.querySelector('#timeCounter');

const plus_100_btn = document.querySelector('#btn_plus_100');
const plus_10_btn = document.querySelector('#btn_plus_10');
const plus_1_btn = document.querySelector('#btn_plus_1');
const minus_100_btn = document.querySelector('#btn_minus_100');
const minus_10_btn = document.querySelector('#btn_minus_100');
const minus_1_btn = document.querySelector('#btn_minus_100');

const massage = document.querySelector('#messageArea');

let targetValue = 0;
let currentValue = 0;
let moves = 0;
let round = 1;
const MAX_ROUNDS = 10;
let timeInterval;
let startTime;

function startTimer(){
    if (timeInterval) clearInterval(timerInterval);
    startTime = performance.now();

    timerInterval = setInterval(() => {
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

    startTimer();
}

setupNewRound()