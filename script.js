function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let computerValue;
    let computerChoice = parseInt((Math.random() * 3) + 1);
    if (computerChoice === 1) {
        computerValue = choices[0];
    }
    else if (computerChoice === 2) {
        computerValue = choices[1];
    }
    else if (computerChoice === 3) {
        computerValue = choices[2];
    }
    return computerValue;

}

function playRound (playerSelection, computerSelection) {
    let tieMessage = `It's a tie! ${playerSelection.toUpperCase()} vs ${computerSelection} is a draw!`;
    let loseMessage  = `You Lost to the computer! ${computerSelection} beats ${playerSelection.toUpperCase()}`;
    let winMessage = `You won against the computer! ${playerSelection.toUpperCase()} beats ${computerSelection}`;
    // let cc = computerSelection.toUpperCase();
    // console.log(cc);
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return tieMessage;
    }
    else if ((playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS")
        || (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK")
        || (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER")) {
        return winMessage;
    }
    else if ((computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "SCISSORS")
        || (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "ROCK")
        || (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "PAPER")) {
        return loseMessage;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));