function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissor"];
    let index = Math.floor(Math.random()*3);

    return choice[index];
}