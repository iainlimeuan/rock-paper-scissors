const container = document.querySelector('#container')
const playerScore = document.querySelector('#playerScore')
const computerScore = document.querySelector('#computerScore')
const information = document.querySelector('#information')
const infoComputer = document.querySelector('#computerChoice')
const infoPlayer = document.querySelector('#playerChoice')
const infoRound = document.querySelector('#infoRound')

let infoComputerScore = 0;
let infoPlayerScore = 0;

function declareWinner() {
    playerScore.textContent = "You: " + infoPlayerScore.toString();
    computerScore.textContent = "Computer: " + infoComputerScore.toString();
    if (infoComputerScore === 5 && infoComputerScore > infoPlayerScore) {
        infoRound.textContent = "Computer wins the whole game!";
        infoComputerScore = 0;
        infoPlayerScore = 0;}
    else if (infoPlayerScore === 5 && infoPlayerScore > infoComputerScore) {
        infoRound.textContent = "Player wins the whole game!";
        infoComputerScore = 0;
        infoPlayerScore = 0;}
    else if (infoPlayerScore === 5 && infoComputerScore === infoPlayerScore)
        {infoRound.textContent = "The whole game is tied!";
        infoComputerScore = 0;
        infoPlayerScore = 0;}
}


function playRound(playerSelection) {
    let computerChoice = ""
    function computerPlay() {
        let choices = ["rock", "paper", "scissors"]
        let randomNumber = parseInt(Math.floor(Math.random() * choices.length));
        computerChoice = choices[randomNumber];
        infoComputer.textContent = "Computer: " + computerChoice;
    }

    computerPlay();
    playerSelection = playerSelection.toLowerCase();
    infoPlayer.textContent = "You: " + playerSelection;
    if (computerChoice === playerSelection) {
        infoRound.textContent = "It's a draw!";
        infoComputerScore ++;
        infoPlayerScore ++;
    }
    else if (computerChoice === "scissors" && playerSelection === "rock" 
    || computerChoice === "rock" && playerSelection === "paper" 
    || computerChoice=== "paper" && playerSelection === "scissors") {
        infoRound.textContent = "You win!"
        infoPlayerScore ++;
    }
    else {
        infoRound.textContent = "You lose!"  
        infoComputerScore ++;
    }
    
    declareWinner();
}

const playerRock = document.querySelector('#playerRock')

playerRock.addEventListener("click", () => {
    playRound("rock");
    })

const playerPaper = document.querySelector('#playerPaper')

playerPaper.addEventListener("click", () => {
        playRound("paper");
    })

const playerScissors = document.querySelector('#playerScissors')

playerScissors.addEventListener("click", () => {
    playRound("scissors");
    })

