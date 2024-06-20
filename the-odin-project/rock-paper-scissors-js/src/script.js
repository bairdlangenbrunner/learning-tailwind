const button = document.querySelector("#submit-button");
const humanInput = document.getElementsByName("option");
const resultsDiv = document.querySelector("#results-div");
const humanScoreDiv = document.querySelector("#human-score-div");
const computerScoreDiv = document.querySelector("#computer-score-div");

let gamesPlayed = 0;
let humanScore = 0;
let computerScore = 0;

const gameObject = {
  0: "rock",
  1: "paper",
  2: "scissors",
};

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return gameObject[randomNumber];
}

function getHumanChoice(inputs) {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked === true) {
      inputs[i].checked = false;
      return gameObject[i];
    }
  }
}

function playRound(event) {
  event.preventDefault();
  gamesPlayed += 1;
  console.log("games played: " + gamesPlayed);

  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice(humanInput);
  console.log("human chose " + humanChoice);
  console.log("computer chose " + computerChoice);

  resultsDiv.innerHTML += `
  <p class="font-bold" id="round${gamesPlayed}">round ${gamesPlayed}:</p>
  <p>human: ${humanChoice}</p>
  <p>computer: ${computerChoice}</p>
  `;

  // h rock - beats c scissors
  // h paper - beats c rock, loses to c scissors
  // h scissors - beats c paper, loses to c rock

  if (humanChoice === computerChoice) {
    const roundResult = document.querySelector(`#round${gamesPlayed}`);
    roundResult.innerHTML += ` tie!`;
    humanScore += 1;
    computerScore += 1;
    humanScoreDiv.innerHTML = `<span class="font-bold">human score: </span>${humanScore}`;
    computerScoreDiv.innerHTML = `<span class="font-bold">computer score: </span>${computerScore}`;
    return;
  }

  else if (humanChoice==="rock" && computerChoice==="scissors") {
    const roundResult = document.querySelector(`#round${gamesPlayed}`);
    roundResult.innerHTML += ` human wins!`;
    humanScore += 1;
    computerScore += 0;
    humanScoreDiv.innerHTML = `<span class="font-bold">human: </span>${humanScore}`;
    computerScoreDiv.innerHTML = `<span class="font-bold">computer: </span>${computerScore}`;
  }

  else if (humanChoice==="paper" && computerChoice==="rock") {
    const roundResult = document.querySelector(`#round${gamesPlayed}`);
    roundResult.innerHTML += ` human wins!`;
    humanScore += 1;
    computerScore += 0;
    humanScoreDiv.innerHTML = `<span class="font-bold">human: </span>${humanScore}`;
    computerScoreDiv.innerHTML = `<span class="font-bold">computer: </span>${computerScore}`;
  }

  else if (humanChoice==="scissors" && computerChoice==="paper") {
    const roundResult = document.querySelector(`#round${gamesPlayed}`);
    roundResult.innerHTML += ` human wins!`;
    humanScore += 1;
    computerScore += 0;
    humanScoreDiv.innerHTML = `<span class="font-bold">human: </span>${humanScore}`;
    computerScoreDiv.innerHTML = `<span class="font-bold">computer: </span>${computerScore}`;
  }

  else {
    const roundResult = document.querySelector(`#round${gamesPlayed}`);
    roundResult.innerHTML += ` computer wins!`;
    humanScore += 0;
    computerScore += 1;
    humanScoreDiv.innerHTML = `<span class="font-bold">human: </span>${humanScore}`;
    computerScoreDiv.innerHTML = `<span class="font-bold">computer: </span>${computerScore}`;
  }
}

button.addEventListener("click", playRound);
