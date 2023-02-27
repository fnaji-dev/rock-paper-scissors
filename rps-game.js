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

// Assign computer choice to computer selection\
let computerSelection = computerChoice()

// Ask player for selection input
// Assign player input to player selection
let playerSelection = prompt("Enter 'rock', 'paper', or 'scissors'")
playerSelection = playerSelection.toLowerCase()

// Check player selection against computer selection
// Inform player of win/loss
if (playerSelection === computerSelection) {
    console.log(`It's a tie, ${playerSelection} against ${computerSelection}!`)
} else {
    switch(playerSelection + "-" + computerSelection) {
        case "rock-scissors":
        case "paper-rock":
        case "scissors-paper":
            console.log(`You win, ${playerSelection} beats ${computerSelection}!`)
            break;
        case "rock-paper":
        case "paper-scissors":
        case "scissors-rock":
            console.log(`Oh no, ${playerSelection} loses to ${computerSelection}! `)
            break;
        default:
            console.log(`Oops, ${playerSelection} isn't a valid choice for this game...`)
    }
}