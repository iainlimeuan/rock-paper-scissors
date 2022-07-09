function computerPlay() {
    let choices = ["rock", "paper", "scissors"]
    let randomNumber = parseInt(Math.floor(Math.random() * choices.length));
    return choices[randomNumber];
}

function playGame(computerPlay, playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (computerPlay === playerSelection) {
        return ("It's a draw!")
    }
    let rules = {rock: "scissors", paper: "rock", scissors: "paper",}
    if (computerPlay === rules[playerSelection]) {
        return "You win!"
    }
    else return "You lose!"
}

/*function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose rock, paper or scissors!");
        console.log(playGame(computerPlay(),playerSelection));
    }
}*/

console.log(playGame("rock","scissors"));

