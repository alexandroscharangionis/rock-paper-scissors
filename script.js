const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerPoints;
let playerPoints;
let computerSelection;

function titleCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.textContent = titleCase(userChoice);
    playRound();
  })
);

function playRound() {
  generateComputerSelection();
}

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
