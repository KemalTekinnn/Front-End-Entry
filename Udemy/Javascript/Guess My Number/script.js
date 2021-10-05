'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'LOL';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 22;

// document.querySelector('.guess').value = 0;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;
// document.querySelector('.score').textContent = score;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'Error';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Choose lower number please';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'LOSER';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Choose higher number please';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'LOST';
    }
  }
});
