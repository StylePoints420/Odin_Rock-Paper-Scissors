function getComputerChoice() {
    let computerValue;
    let computerChoice = parseInt((Math.random() * 3) + 1);
    if (computerChoice === 1) {
        computerValue = "Rock";
    }
    else if (computerChoice === 2) {
        computerValue = "Paper";
    }
    else if (computerChoice === 3) {
        computerValue = "Scissors";
    }

}

function playRound (playerSelection, computerSelection) {
    let tieMessage = `It's a tie! ${playerSelection} vs ${computerSelection} is a draw!`;
    let loseMessage  = `You Lost to the computer! ${computerSelection} beats ${playerSelection}`;
    let winMessage = `You won against the computer! ${playerSelection} beats ${computerSelection}`;
    if (playerSelection === computerSelection) {
        return tieMessage;
    }
    else if ((playerSelection === "Rock" && computerSelection === "Scissors")
        || (playerSelection === "Paper" && computerSelection === "Rock")
        || (playerSelection === "Scissors" && computerSelection === "Paper")) {
        return winMessage;
    }
    else if ((computerSelection === "Rock" && playerSelection === "Paper")
    || (computerSelection === "Paper" && playerSelection === "Rock")
    || (computerSelection === "Scissors" && playerSelection === "Paper")) {
        return loseMessage;
    }

}

getComputerChoice();