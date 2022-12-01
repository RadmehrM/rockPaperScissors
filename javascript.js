function getComputerChoice() {
    const choice = ["rock", "paper", "scissor"];
    let index = Math.floor(Math.random()*3);

    return choice[index];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "TIE"
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissor") {
        return "You Win, rock beats scissor";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        return "You lose, paper beats rock";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        return "You Win, paper beats rock";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissor") {
        return "You lose, scissor beats paper";
    }  else if (playerSelection.toLowerCase() === "scissor" && computerSelection === "paper") {
        return "You Win, scissor beats paper";
    } else if (playerSelection.toLowerCase() === "scissor" && computerSelection === "rock") {
        return "You lose, rock beats scissor";
    }
  }


  function game() {

    let you = 0;
    let computer = 0;

    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("choose rock, paper or scissor: ");
        const computerSelection = getComputerChoice();
        let round = playRound(playerSelection, computerSelection);
        if (round.includes("Win")) {
            you++;
        } else {
            computer++;
        }
    }

    return "Score: You - " + you + " Computer - " + computer;

  }

  let GAME = game();

  console.log(GAME);