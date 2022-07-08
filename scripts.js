function computerPlay() {
    let choices = ["rock", "paper", "scissors"]
    let randomNumber = parseInt(Math.floor(Math.random() * choices.length));
    return choices[randomNumber];
}

console.log(computerPlay())
