const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const resultDisplay = document.querySelector("#resultDisplay");
const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
const computerScoreDisplay = document.querySelector("#computerScoreDisplay");

// Initial scores of both
let playerScore = 0;
let computerScore = 0;

// This function will disable the buttons
function disableButton(e) {
  e.disableButton = true;
}

// Main playgame function
function playGame(playerSelection) {
  // Randomly chooses 1 value from the array choices
  const computerSelection = choices[Math.floor(Math.random() * 3)];
  // Initail result
  let result = "";
  // If both selections are same it'll display tie
  if (playerSelection === computerSelection) {
    result = "IT'S A TIE";
  }
  // all events where player wins
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = "PLAYER WINS";
  }
  // if player score reaches 5 it'll disable the button
  if (playerScore === 5) {
    disableButton();
  }
  // all the events where computer wins
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    result = "COMPUTER WINS";
  }
  // if computer score reaches 5 it'll disable the buttons
  if (computerScore === 5) {
    disableButton();
  }
  // shows the player choice on the display
  playerDisplay.textContent = `PLAYER: ${playerSelection}`;
  // shows the computer choice on the display
  computerDisplay.textContent = `COMPUTER: ${computerSelection}`;
  // result displays here
  resultDisplay.textContent = result;
  // adds classes with color
  resultDisplay.classList.remove("greenText", "redText");

  switch (result) {
    // adds 1 if player wins and updates display
    case "PLAYER WINS":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    // adds 1 if computer wins
    case "COMPUTER WINS":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
}

// This function will reload the window i.e refresh the page
function reset() {
  window.location.reload();
}
