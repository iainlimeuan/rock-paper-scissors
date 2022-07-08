function computerPlay() {
    let choices = ["rock", "paper", "scissors"]
    let randomNumber = parseInt(Math.floor(Math.random() * choices.length));
    return choices[randomNumber];
}

function playGame(computerPlay, playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (computerPlay == "rock") {
        if (playerSelection == "rock") {
            return "It's a tie!";
        }
        else if (playerSelection == "paper") {
            return "You win! Paper beats rock.";
        }
        else return "You lose! Rock beats scissors.";
    }

    else if (computerPlay == "paper") {
        if (playerSelection == "paper") {
            return "It's a tie!";
        }
        else if (playerSelection == "rock") {
            return "You lose! Paper beats rock.";
        }
        else return "You win! Scissors beats paper."
    }

    else if (computerPlay == "scissors") {
        if (playerSelection == "scissors") {
            return "It's a tie!";
        }
        else if (playerSelection == "paper") {
            return "You lose! Scissors beats paper.";
        }
        else return "You win! Rock beats scissors."
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose rock, paper or scissors!");
        console.log(playGame(computerPlay(),playerSelection));
    }
}

game();

