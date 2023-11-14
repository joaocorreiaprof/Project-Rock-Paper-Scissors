function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

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

function game() {
  let playerWins = 0;
  let computerWins = 0;

  for (let roundNumber = 1; roundNumber <= 5; roundNumber++) {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt(
      "Choose one option: Rock, Paper, or Scissors"
    );

    const roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);

    if (roundResult.includes("You Win")) {
      playerWins++;
    } else if (roundResult.includes("You Lose")) {
      computerWins++;
    }
  }

  if (playerWins > computerWins) {
    console.log("You are the overall winner!");
  } else if (playerWins < computerWins) {
    console.log("Computer is the overall winner!");
  } else {
    console.log("It's a tie overall!");
  }
}

game();
