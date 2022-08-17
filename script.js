let playerInput = prompt("Enter your option");
let playerSelection = playerInput.toUpperCase();

const options = ["ROCK", "PAPER", "SCISSORS"];
function getComputerChoice(){
    const randomOption = options[Math.floor(Math.random() * options.length)]
    return randomOption;
}
let computerSelection = getComputerChoice();
