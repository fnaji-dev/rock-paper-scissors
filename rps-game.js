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

// Check player selection against computer selection

// Inform player of win/loss