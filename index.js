let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerScore >= 5 || computerScore >= 5) {
    // Game has already ended
    return;
  }

  let resultMessage = "";
  let quoteResults = "";

  if (playerSelection === computerSelection) {
    resultMessage = "It's a tie!";
    quoteResults =
      "Terrible things are about to happen. You must not stay here, now that history is about to repeat itself";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    resultMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
    quoteResults =
      "Dobby has heard of your greatness, Sir, but never has he been asked to sit down by a wizard! Like an equal";
    playerScore++;
  } else {
    resultMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
    quoteResults =
      "If you lose again, Dobby will throw himself off the topmost tower!";
    computerScore++;
  }

  document.querySelector(".results").innerHTML = resultMessage;
  document.querySelector("#playerScore").innerHTML = `You ${playerScore}`;
  document.querySelector(
    "#computerScore"
  ).innerHTML = `Computer ${computerScore}`;
  document.querySelector("#quoteResults").innerHTML = quoteResults;

  if (playerScore >= 5 || computerScore >= 5) {
    endGame();
    disableButtons();
  }
}

function endGame() {
  let finalMessage = "";
  let quoteResults = "";

  if (playerScore > computerScore) {
    finalMessage = "You saved Dobby!";
    quoteResults =
      "Dobby: What a beautiful place to be with friends. Dobby is happy to be with his friend!";
  } else if (playerScore < computerScore) {
    finalMessage = "Dobby died!";
    quoteResults =
      "Do not pity the dead. Pity the living, and, above all, those who live without love.” ― Albus Dumbledore";
  } else {
    finalMessage = "Dobby lives for now. Try again!";
    quoteResults =
      "Dobby: If you don't make it again, Dobby will throw himself off the topmost tower!";
  }

  // Delay the finalMessage by a short amount of time to allow the UI to update
  setTimeout(function () {
    document.querySelector("#finalMessage").innerHTML = finalMessage;
    document.querySelector("#quoteResults").innerHTML = quoteResults; // Use # for ID
  }, 100);
}

function disableButtons() {
  // Disable the buttons to prevent further clicks
  document.getElementById("rockBtn").disabled = true;
  document.getElementById("paperBtn").disabled = true;
  document.getElementById("scissorsBtn").disabled = true;
}

function game() {
  document.getElementById("rockBtn").addEventListener("click", function () {
    playRound("rock", getComputerChoice());
  });
  document.getElementById("paperBtn").addEventListener("click", function () {
    playRound("paper", getComputerChoice());
  });
  document.getElementById("scissorsBtn").addEventListener("click", function () {
    playRound("scissors", getComputerChoice());
  });
}

game();
