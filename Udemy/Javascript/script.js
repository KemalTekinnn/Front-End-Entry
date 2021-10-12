'use strict';
console.log('JavaScript Connected');
//
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const Current0 = document.getElementById('current--0');
const Current1 = document.getElementById('current--1');
let score = [0, 0];
let player = 0;
let currentScore = 0;
let playing = true;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const switchPlayer = function () {
  document.getElementById(`current--${player}`).textContent = 0;
  currentScore = 0;
  player = player === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
// Rolling Dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // Check for rolled 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${player}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Hold button
btnHold.addEventListener('click', function () {
  if (playing) {
    score[player] += currentScore;
    document.getElementById(`score--${player}`).textContent = score[player];

    if (score[player] >= 10) {
      playing = false;
      document
        .querySelector(`.player--${player}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${player}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  document
    .querySelector(`.player--${player}`)
    .classList.remove('player--winner');
  score = [0, 0];
  player = 0;
  currentScore = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');

  currentScore = 0;
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
});
