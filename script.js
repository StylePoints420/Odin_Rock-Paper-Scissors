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

function playRound (playerSelection, computerSelection, tieMessage, loseMessage, winMessage) {
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
    else {
        return;
    }
}

function game() {
    let message = "Enter your choice: Rock, Paper or Scissors";
    let playerSelection;
    const computerSelection = getComputerChoice();
    let counter;
    let playerWin = 0, computerWin = 0, tieMark = 0;
        for(counter = 1; counter <= 5; counter++) {
            playerSelection = prompt(message);
            let tieMessage = `It's a tie! ${playerSelection} vs ${computerSelection} is a draw!`;
            let loseMessage  = `You Lost to the computer! ${computerSelection} beats ${playerSelection}`;
            let winMessage = `You won against the computer! ${playerSelection} beats ${computerSelection}`;
            playRound(playerSelection, computerSelection, tieMessage, loseMessage, winMessage);
            if (playRound(playerSelection, computerSelection, tieMessage, loseMessage, winMessage) === winMessage) {
                alert(winMessage);
                playerWin += 1;
            }
            else if (playRound(playerSelection, computerSelection, tieMessage, loseMessage, winMessage) === loseMessage) {
                alert(loseMessage);
                computerWin += 1;
            }
            else if (playRound(playerSelection, computerSelection, tieMessage, loseMessage, winMessage) === tieMessage) {
                alert(tieMessage);
            }
            else {
                alert("You did not enter the correct choices, you will not earn a score for this round!");
            }
        }

    if (playerWin > computerWin) {
        alert(`Player wins! With a total score of ${playerWin} and the computer with a score of ${computerWin}`);
    }
    else if (computerWin > playerWin) {
        alert(`Computer wins! <br> With a total score of ${computerWin} and the player with a score of ${playerWin}`);
    }
    else if (computerWin === playerWin) {
        alert (`It's a tie! Both player and computer has the total score of ${playerWin}`);
    }
}
game();