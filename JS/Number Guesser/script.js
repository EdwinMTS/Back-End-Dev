let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget () {
    return Math.floor(Math.random() * 10)
}


function compareGuesses(humanGuess, computerGuess, target) {
    let humanDistance = Math.abs(humanGuess - target);
    let computerDistance = Math.abs(computerGuess - target);
    console.log(Math.abs(humanGuess - target))
    console.log(Math.abs(computerGuess - target))

    if (humanDistance <= computerDistance) {
        return true;
    } else if (computerDistance < humanDistance) {
        return false;
    }
}

function updateScore(winner) {
    if (winner === "human") {
        humanScore++;
    } else if (winner === "computer") {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}

