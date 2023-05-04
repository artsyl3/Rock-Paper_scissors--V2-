const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");
const resultElement = document.getElementById("result");


const choices = ["rock", "paper", "scissors", "fire", "water"];


let playerScore = 0;
let computerScore = 0;


if (localStorage.getItem("playerScore")) {
  playerScore = parseInt(localStorage.getItem("playerScore"));
}

if (localStorage.getItem("computerScore")) {
  computerScore = parseInt(localStorage.getItem("computerScore"));
}


function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const result = determineWinner(playerChoice, computerChoice);

  let resultText = `Player picks ${playerChoice}, Computer picks ${computerChoice}. Result: `;

  if (result === "player") {
    playerScore++;
    resultText += "You win!";
  } else if (result === "computer") {
    computerScore++;
    resultText += "Computer wins!";
  } else {
    resultText += "It's a tie!";
  }

  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
  resultElement.textContent = resultText;

  
  localStorage.setItem("playerScore", playerScore.toString());
  localStorage.setItem("computerScore", computerScore.toString());
}


function determineWinner(playerChoice, computerChoice) {
  if (
    (playerChoice === "rock" && (computerChoice === "scissors" || computerChoice === "fire" || computerChoice === "water")) ||
    (playerChoice === "paper" && (computerChoice === "rock" || computerChoice === "water")) ||
    (playerChoice === "scissors" && (computerChoice === "paper" || computerChoice === "fire")) ||
    (playerChoice === "fire" && (computerChoice === "paper" || computerChoice === "rock")) ||
    (playerChoice === "water" && (computerChoice === "fire" || computerChoice === "scissors"))
  ) {
    return "player";
  } else if (playerChoice === computerChoice) {
    return "tie";
  } else {
    return "computer";
  }
}


function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreElement.textContent = 0;
  computerScoreElement.textContent = 0;
  resultElement.textContent = "";

  
  localStorage.removeItem("playerScore");
  localStorage.removeItem("computerScore");
}


window.addEventListener("load", () => {
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
});
