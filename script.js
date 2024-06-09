function getComputerChoice() {
  random = Math.floor(Math.random() * 3);
  if (random == 1) {
    return "rock"
  } else if (random == 2) {
    return "paper"
  } else {
    return "scissors"
  }
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper, Scissors").toLowerCase();
  return choice
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  do {
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();

    function playRound(humanChoice, computerChoice) {
      if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
          humanScore += 1
          return console.log("You Win! Rock beats Scissors")
        } else if (computerChoice == "paper") {
          computerScore += 1
          return console.log("You Lose! Paper beats Rock")
        }
      }

      if (humanChoice == "paper") {
        if (computerChoice == "rock") {
          humanScore += 1
          return console.log("You Win! Paper beats Rock")
        } else if (computerChoice == "scissors") {
          computerScore += 1
          return console.log("You Lose! Scissors beats Paper")
        }
      }

      if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
          humanScore += 1
          return console.log("You Win! Scissors beats Paper")
        } else if (computerChoice == "rock") {
          computerScore += 1
          return console.log("You Lose! Rock beats Scissors")
        }
      }

      if (humanChoice == computerChoice) {
        return console.log("Tie")
      }
    }
    playRound(humanSelection, computerSelection)
    console.log(humanSelection)
    console.log(computerSelection)
    console.log(humanScore)
    console.log(computerScore)
  } while(humanScore != 3 && computerScore != 3);

 }

playGame();
