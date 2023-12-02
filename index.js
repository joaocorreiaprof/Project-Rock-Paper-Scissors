//Computer will choose what to play
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

//Function to play rounds
function playRound(playerSelection, computerSelection) {
  let resultMessage = "";
  let playerScore = 0;
  let computerScore = 0;

  if (playerSelection === computerSelection) {
    resultMessage = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    resultMessage =
      "You Win! " + playerSelection + " beats " + computerSelection;
  } else {
    resultMessage =
      "You Lose! " + computerSelection + " beats " + playerSelection;
  }
  document.querySelector(".results").innerHTML = resultMessage;
  document.querySelector("#playerScore").innerHTML = "You " + playerScore;
  document.querySelector("#computerScore").innerHTML =
    "Computer " + computerScore;

  return resultMessage;
}
//Initial function, where variables are declare. Its the engine
function game() {
  let userChoice = "";
  document.getElementById("rockBtn").addEventListener("click", function () {
    userChoice = "rock";
    playRound(userChoice, getComputerChoice());
  });
  document.getElementById("paperBtn").addEventListener("click", function () {
    userChoice = "paper";
    playRound(userChoice, getComputerChoice());
  });
  document.getElementById("scissorsBtn").addEventListener("click", function () {
    userChoice = "scissors";
    playRound(userChoice, getComputerChoice());
  });

  /*for (let roundNumber = 1; roundNumber <= 5; roundNumber++) {
    const computerSelection = getComputerChoice();
    const playerSelection = "";

    const roundResult = playRound(let roundNumber = 1; nd(playerSelection, computerSelection);
    console.log(roundResult);

    if (roundResult.includes("You Win")) {
      playerWins++;
    } else if (roundResult.includes("You Lose")) {
      computerWins++;
    }
  }*/
  let finalMessage = "";
  if (playerWins > computerWins) {
    finalMessage = "You are the overall winner!";
  } else if (playerWins < computerWins) {
    finalMessage = "Computer is the overall winner!";
  } else {
    finalMessage = "It's a tie overall!";
  }
}

function keepPLaying() {}

game();
