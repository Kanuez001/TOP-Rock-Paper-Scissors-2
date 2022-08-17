let playerInput = prompt("Enter your option");
let playerSelection = playerInput.toUpperCase();

const options = ["ROCK", "PAPER", "SCISSORS"];
function getComputerChoice(){
    const randomOption = options[Math.floor(Math.random() * options.length)]
    return randomOption;
}
let computerSelection = getComputerChoice();
console.log(computerSelection)

function playRound(playerSelection, computerSelection){
    const tie = "It's a tie. Try again!"
    const R1 = "You lose! Paper swallows Rock"
    const R2 = "You win! Rock smashes Scissors"
    const P1 = "You win! Paper swallows Rock"
    const P2 = "You lose! Scissors shreds Paper"
    const S1 = "You lose! Rock smashes Scissors"
    const S2 = "You win! Scissors shreds Paper"
    const wrongInput = "Enter a valid option!"

    if (playerSelection === "ROCK" && computerSelection === "ROCK"){
        return tie;
    }
    else if (playerSelection === "ROCK" && computerSelection === "PAPER"){
        return R1;
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
        return R2;
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
        return P1;
    }
    else if (playerSelection === "PAPER" && computerSelection === "PAPER"){
        return tie;
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS"){
        return P2;
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK"){
        return S1;
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        return S2;
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS"){
        return tie;
    }
    else{
        return wrongInput;
    }
}

console.log(playRound(playerSelection, computerSelection))
