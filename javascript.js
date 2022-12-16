function randomChoice() {
    const choice = ["rock", "paper", "scissor"];
    let index = Math.floor(Math.random()*3);

    return choice[index];
}

let computerChoice = randomChoice();


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ("TIE");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissor") {
        return ("You Win, rock beats scissor"); 
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        return ("You Lose, paper beats rock") ;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        return ("You Win, paper beats rock") ;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissor") {
        return ("You Lose, scissor beats paper") ;
    }  else if (playerSelection.toLowerCase() === "scissor" && computerSelection === "paper") {
        return ("You Win, scissor beats paper") ;
    } else if (playerSelection.toLowerCase() === "scissor" && computerSelection === "rock") {
        return ("You Lose, rock beats scissor");
    }
  }


  let you = 0;
  let computer = 0;

  const results = document.createElement("div");
  results.textContent = "You: " + you + " - " + "Computer: " + computer;
  document.body.appendChild(results);
    

  const rock = document.querySelector('.rock');
  const paper = document.querySelector('.paper');
  const scissors = document.querySelector('.scissors');

  

  rock.addEventListener("click", (e) => {
   if (playRound("rock", computerChoice).includes("Win")) {you++;}
   else if (playRound("rock", computerChoice).includes("Lose")) {computer++;}

   results.innerText = "You: " + you + " - " + "Computer: " + computer;

   if (computer === 5) {
    results.innerText = "Computer Wins " + computer + "-" + you;
    scissors.disabled = true;
    paper.disabled = true;
    rock.disabled = true;
    } else if (you === 5) {
        results.innerText = "You Win " + you + "-" + computer;
        scissors.disabled = true;
        paper.disabled = true;
        rock.disabled = true;
      }

      console.log(computerChoice)
      computerChoice = randomChoice();
   
});
  paper.addEventListener("click", (e) => {
    if (playRound("paper", computerChoice).includes("Win")) {you++;}
    else if (playRound("paper", computerChoice).includes("Lose")) {computer++;}

    results.innerText = "You: " + you + " - " + "Computer: " + computer;

    if (computer === 5) {
        results.innerText = "Computer Wins " + computer + "-" + you;
        scissors.disabled = true;
        paper.disabled = true;
        rock.disabled = true;
        } else if (you === 5) {
            results.innerText = "You Win " + you + "-" + computer;

            scissors.disabled = true;
            paper.disabled = true;
            rock.disabled = true;
          } 
          
          console.log(computerChoice)
          computerChoice = randomChoice();

});

  scissors.addEventListener("click", (e) => {
    if (playRound("scissor", computerChoice).includes("Win")) {you++;}
    else if (playRound("scissor", computerChoice).includes("Lose")) {computer++;}

   results.innerText = "You: " + you + " - " + "Computer: " + computer;

   if (computer === 5) {
    results.innerText = "Computer Wins " + computer + "-" + you;
    scissors.disabled = true;
    paper.disabled = true;
    rock.disabled = true;
    } else if (you === 5) {
      results.innerText = "You Win " + you + "-" + computer;
      scissors.disabled = true;
      paper.disabled = true;
      rock.disabled = true;
    }


    console.log(computerChoice)
    computerChoice = randomChoice();

  });
  


