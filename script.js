function game(){
    const tie = "It's a tie. Try again!"
    const R1 = "You lose! Paper swallows Rock"
    const R2 = "You win! Rock smashes Scissors"
    const P1 = "You win! Paper swallows Rock"
    const P2 = "You lose! Scissors shreds Paper"
    const S1 = "You lose! Rock smashes Scissors"
    const S2 = "You win! Scissors shreds Paper"
    const wrongInput = "Enter a valid option!"
    let playerScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++){
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
            if (playerSelection === "ROCK" && computerSelection === "ROCK"){
                return tie;
            }
            else if (playerSelection === "ROCK" && computerSelection === "PAPER"){
                computerScore++;
                return R1;
            }
            else if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
                playerScore++;
                return R2;
            }
            else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
                playerScore++;
                return P1;
            }
            else if (playerSelection === "PAPER" && computerSelection === "PAPER"){
                return tie;
            }
            else if (playerSelection === "PAPER" && computerSelection === "SCISSORS"){
                computerScore++;
                return P2;
            }
            else if (playerSelection === "SCISSORS" && computerSelection === "ROCK"){
                computerScore++;
                return S1;
            }
            else if (playerSelection === "SCISSORS" && computerSelection === "PAPER"){
                playerScore++;
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
    }
    let totalScore = `FINAL RESULT 
    Player: ${playerScore} | Computer: ${computerScore}`
    console.log(totalScore);

    if (playerScore > computerScore) {
        console.log("Congrats! You win");
    }
    else if (computerScore > playerScore) {
        console.log("You lose! Try again");
    }
    else {
        console.log("It's a tie! Play again");
    }
}
console.log(game());
