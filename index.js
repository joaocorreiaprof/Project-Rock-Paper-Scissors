function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function game() {
  for (let roundNumber = 1; roundNumber <= 5; roundNumber++) {
    function playRound(playerSelection, computerSelection) {
      const playerChoice = playerSelection.toLowerCase();
      const computerChoice = computerSelection.toLowerCase();

      if (playerChoice === computerChoice) {
        return "It's a tie!";
      } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
      ) {
        return (
          "You Win! " +
          playerChoice.charAt(0).toUpperCase() +
          playerChoice.slice(1).toLowerCase() +
          " beats " +
          computerChoice.charAt(0).toUpperCase() +
          computerChoice.slice(1).toLowerCase()
        );
      } else {
        return (
          "You Lose! " +
          computerChoice.charAt(0).toUpperCase() +
          computerChoice.slice(1).toLowerCase() +
          " beats " +
          playerChoice.charAt(0).toUpperCase() +
          playerChoice.slice(1).toLowerCase()
        );
      }
    }
  }
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("Choose one option: Rock, Paper or Scissors");
console.log(playRound(playerSelection, computerSelection));
