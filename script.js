function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function game() {
  for (let i = 0; i < 5; i++) {
    function playRound(playerSelection, computerSelection) {
      if (
        (playerSelection.toLowerCase() === "rock" &&
          computerSelection === "scissors") ||
        (playerSelection.toLowerCase() === "paper" &&
          computerSelection === "rock") ||
        (playerSelection.toLowerCase() === "scissors" &&
          computerSelection === "paper")
      ) {
        return "Player Won";
      } else if (
        (playerSelection.toLowerCase() === "rock" &&
          computerSelection === "paper") ||
        (playerSelection.toLowerCase() === "paper" &&
          computerSelection === "scissors") ||
        (playerSelection.toLowerCase() === "scissors" &&
          computerSelection === "rock")
      ) {
        return "Computer Won";
      } else if (playerSelection === computerSelection) {
        return "It's a Tie";
      } else {
        return "Invalid Input";
      }
    }

    const playerSelection = prompt("Enter anything");
    const computerSelection = computerPlay();
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
