// Get random computer choice
function computerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    if (randomInt === 0) {
        return "rock";
    } else if (randomInt === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
function playRound(playerSelection, computerSelection){

    // Assign computer choice to computer selection\
    computerSelection = computerChoice()

    // Ask player for selection input
    // Assign player input to player selection
    playerSelection = prompt("Enter 'rock', 'paper', or 'scissors'")
    playerSelection = playerSelection.toLowerCase()

    // Check player selection against computer selection
    // Inform player of win/loss
    if (playerSelection === computerSelection) {
        return "tie"
    } else {
        switch(playerSelection + "-" + computerSelection) {
            case "rock-scissors":
            case "paper-rock":
            case "scissors-paper":
                return "win"
            case "rock-paper":
            case "paper-scissors":
            case "scissors-rock":
                return "loss"
            default:
                return "bad input"
        }
    }
}

function game() {
    let winCount = 0;
    let lossCount = 0;
    let tieCount = 0;

    for (let i = 0; i < 5; i++) {
        switch(playRound()) {
            case "win":
                winCount += 1;
                break;
            case "loss":
                lossCount += 1;
                break
            case "tie":
                tieCount += 1;
                break;
        }
        if (i === 4) {
        console.log(`Results of 5 rounds:\n${winCount} Wins - ${lossCount} Losses - ${tieCount} Ties`);
        }
    }
}

game()