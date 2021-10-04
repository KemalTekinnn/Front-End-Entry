'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'LOL';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 22;

// document.querySelector('.guess').value = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'LOL';
  }
});
