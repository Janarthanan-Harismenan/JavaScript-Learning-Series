const choices = [`rock`, `paper`, `scissors`];
let playerScore = 0;
let computerScore = 0;
const playerDisplay = document.getElementById(`playerDisplay`);
const computerDisplay = document.getElementById(`computerDisplay`);
const resultDisplay = document.getElementById(`resultDisplay`);
const playerScoreDisplay = document.getElementById(`playerScoreDisplay`);
const computerScoreDisplay = document.getElementById(`computerScoreDisplay`);

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;

  if (playerChoice === computerChoice) {
    resultDisplay.textContent = `It's a tie!`;
  } else if (
    (playerChoice === `rock` && computerChoice === `scissors`) ||
    (playerChoice === `paper` && computerChoice === `rock`) ||
    (playerChoice === `scissors` && computerChoice === `paper`)
  ) {
    resultDisplay.textContent = `You Win!`;
    // playerScore++;
    // playerScoreDisplay.textContent = `Player: ${playerScore}`;
  } else {
    resultDisplay.textContent = `You Lose!`;
    // computerScore++;
    // computerScoreDisplay.textContent = `Computer: ${computerScore}`;
  }

  resultDisplay.classList.remove(`greenText`, `redText`);

  switch (resultDisplay.textContent) {
    case `You Win!`:
      playerScore++;
      playerScoreDisplay.textContent = `Player: ${playerScore}`;
      resultDisplay.classList.add(`greenText`);
      break;
    case `You Lose!`:
      computerScore++;
      computerScoreDisplay.textContent = `Computer: ${computerScore}`;
      resultDisplay.classList.add(`redText`);
      break;
  }
}
