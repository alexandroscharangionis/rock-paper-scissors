const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll(".choice");
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const startGame = document.getElementById("start-btn");
const gameMenu = document.getElementById("game-menu");

userScore.textContent = 0;
computerScore.textContent = 0;

let userSelection;
let computerPoints = 0;
let userPoints = 0;
let computerSelection;

function titleCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function displayGameMenu() {
  gameMenu.style.display = "block";
  introMenu = document.getElementById("intro-menu");
  introMenu.style.display = "none";
}

startGame.addEventListener("click", displayGameMenu);

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userSelection = titleCase(e.target.id);
    userChoiceDisplay.textContent = userSelection;
    playRound();
  })
);

function generateComputerSelection() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  if (randomNumber === 0) {
    computerSelection = "Rock";
  } else if (randomNumber === 1) {
    computerSelection = "Paper";
  } else {
    computerSelection = "Scissors";
  }
  computerChoiceDisplay.textContent = computerSelection;
  return computerSelection;
}

function draw() {
  resultDisplay.textContent = `It's a draw.`;
}

function computerWins() {
  resultDisplay.textContent = `Mighty Computer won this round.`;
  return ++computerPoints;
}

function userWins() {
  resultDisplay.textContent = `You won this round.`;
  return ++userPoints;
}

function playRound() {
  generateComputerSelection();

  if (computerSelection === userSelection) {
    draw();
  } else if (
    (computerSelection === "Rock" && userSelection === "Scissors") ||
    (computerSelection === "Scissors" && userSelection === "Paper") ||
    (computerSelection === "Paper" && userSelection === "Rock")
  ) {
    computerWins();
  } else {
    userWins();
  }
  userScore.textContent = userPoints;
  computerScore.textContent = computerPoints;

  // if ((userPoints || computerPoints) === 5) {
  // }
}
