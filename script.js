let computerPlay = function () {
  let decider = Math.random();
  if (decider < 1 / 3) {
    return "rock";
  } else if (decider < 2 / 3) {
    return "paper";
  } else return "scissors";
};

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == "rock") {
    switch (computerSelection) {
      case "scissors":
        return "You Win! Rock beats Scissors!";
      case "paper":
        return "You Lose! Paper beats Rock!";
      default:
        return "Draw!";
    }
  } else if (playerSelection == "paper") {
    switch (computerSelection) {
      case "scissors":
        return "You Lose! Paper beats Rock!";
      case "rock":
        return "You Win! Paper beats Rock!";
      default:
        return "Draw!";
    }
  } else if (playerSelection == "scissors") {
    switch (computerSelection) {
      case "rock":
        return "You Lose! Rock beats Scissors!";
      case "paper":
        return "You Win! Scissors beats Paper!";
      default:
        return "Draw!";
    }
  } else return "Invalid Selection!";
}

function game(){
    for (let i = 0; i < 5; i++){
        let playerChoice = prompt("Rock | Paper | Scissors?");
        let computerChoice = computerPlay();
        console.log(playRound(playerChoice,computerChoice))
    }
}

function probability() {
    let result = [];
    let countScissors = 0;
    let countPaper = 0;
    let countRock = 0;
  
    for (let index = 0; index < 100000000; index++) {
      result.push(computerPlay());
    }
  
    for (let index = 0; index < 100000000; index++) {
      switch (result[index]) {
        case "scissors":
          countScissors++;
          break;
        case "paper":
          countPaper++;
          break;
        case "rock":
          countRock++;
          break;
      }
    }
    console.log(`The simulation ran for 100,000,000 iterations
    Amount of Rocks: ${countRock}
    Amount of Papers: ${countPaper}
    Amount of Scissors: ${countScissors}
    `);
  }

game();



