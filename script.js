let playerScore = 0;
let computerScore = 0;

function game(){
    const tie = "It's a tie. Try again!"
    const R1 = "You lose! Paper swallows Rock"
    const R2 = "You win! Rock smashes Scissors"
    const P1 = "You win! Paper swallows Rock"
    const P2 = "You lose! Scissors shreds Paper"
    const S1 = "You lose! Rock smashes Scissors"
    const S2 = "You win! Scissors shreds Paper"
    const wrongInput = "Enter a valid option!"
    const playerWin = "Congrats! You are the final winner"
    const computerWin = "You lose at the end! Try again."
   
    const options = ["ROCK", "PAPER", "SCISSORS"];
    function getComputerChoice(){
        const randomOption = options[Math.floor(Math.random() * options.length)]
        return randomOption;
    }
    let computerSelection = getComputerChoice();

    function playRound(){
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
    const play = document.querySelector(".playRound");
    play.textContent = playRound();
    
    let currentScore = `CURRENT SCORE;
    Player: ${playerScore} | Computer: ${computerScore}`;

    const compSelect = document.querySelector(".computerSelection");
    compSelect.textContent = `Computer selects ${computerSelection}`;

    const score = document.querySelector(".currentScore");
    score.textContent = currentScore;

    function winner(){
        if (playerScore > computerScore){
            return playerWin;
        }
        else {
            return computerWin;
        }
    }

    if (playerScore === 5 || computerScore === 5){
        const finalWinner = document.querySelector(".finalWinner");
        finalWinner.textContent = winner();
    }
}


function rockClick(){
    playerSelection = "ROCK";
    return playerSelection;
};

function paperClick(){
    playerSelection = "PAPER";
    return playerSelection;
};

function scissorsClick(){
    playerSelection = "SCISSORS";
    return playerSelection;
};

const rock_btn = document.querySelector("#rock");
rock_btn.addEventListener("click", rockClick);

const paper_btn = document.querySelector("#paper");
paper_btn.addEventListener("click", paperClick);

const scissors_btn = document.querySelector("#scissors");
scissors_btn.addEventListener("click", scissorsClick);

const btns = document.querySelectorAll("button");
btns.forEach((button) => {
    button.addEventListener("click", game); 
});

