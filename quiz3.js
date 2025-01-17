let randomNumber = Math.floor(Math.random() * 100) + 1;
let tries = 7; 
let triesTaken = 0;

function guessNumber() {
  const guess = parseInt(document.querySelector('.inputs-Values').value);
  const output = document.querySelector('.final-out');

  if (isNaN(guess) || guess < 1 || guess > 100) {
    output.textContent = 'Please enter a number between 1 and 100';
    return;
  }

  triesTaken++;

  if (guess > randomNumber) {
    output.textContent = 'Number is too high, try again';
  } else if (guess < randomNumber) {
    output.textContent = 'Number is too low, try again';
  } else {
    output.textContent = `Guess is correct. You win! It took you ${triesTaken} tries.`;
    return;
  }

  if (triesTaken >= tries) {
    output.textContent = `You Lose, the number was ${randomNumber}`;
  }
}

function newGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  triesTaken = 0;
  document.querySelector('.inputs-Values').value = '';
  document.querySelector('.final-out').textContent = '';
}

document.querySelector('.btnGuess').addEventListener('click', guessNumber);
document.querySelector('.btnNewGame').addEventListener('click', newGame);