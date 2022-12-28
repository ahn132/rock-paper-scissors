function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * 3);
    if (randomInt === 0) {
        return "rock";
    } else if (randomInt === 1) {
        return "paper";
    } else if (randomInt === 2) {
        return "scissors";  
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors";
    } else {
        return "It's a tie!";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection;
    let computerSelection;
    let result;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
        computerSelection = getComputerChoice();
        console.log(`You chose ${playerSelection}`);
        console.log(`Computer chose ${computerSelection}`);
        result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
    }
    console.log(`playerScore: ${playerScore}`);
    console.log(`computerScore: ${computerScore}`);
}

game();