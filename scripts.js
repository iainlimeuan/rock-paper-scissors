function playRound(playerSelection) {

    function computerPlay() {
        let choices = ["rock", "paper", "scissors"]
        let randomNumber = parseInt(Math.floor(Math.random() * choices.length));
        computerChoice = choices[randomNumber];
        console.log("Computer: " + computerChoice)
    }

    computerPlay();
    playerSelection = playerSelection.toLowerCase();
    console.log("You: " + playerSelection);
    if (computerChoice === playerSelection) {
        console.log("It's a draw!")
    }
    else if (computerChoice === "scissors" && playerSelection === "rock" 
    || computerChoice === "rock" && playerSelection === "paper" 
    || computerChoice=== "paper" && playerSelection === "scissors") {
        console.log("You win!")
    }
    else console.log("You lose!")
    }

/*function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose rock, paper or scissors!");
        console.log(playGame(computerPlay(),playerSelection));
    }
}*/

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