

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
    if (imgs.children.length > 0) {
        imgs.removeChild(imgs.lastChild);
        imgs.removeChild(imgs.lastChild);
    }

    //adds corresponding image to the player
    if (playerSelection === "rock") {
        imgs.appendChild(rockImage);
    } else if (playerSelection === "paper") {
        imgs.appendChild(paperImage);
    } else if (playerSelection === "scissors") {
        imgs.appendChild(scissorsImage);
    }

    //adds corresponding image to the computer
    if (computerSelection === "rock") {
        imgs.appendChild(rockImageTwo);
    } else if (computerSelection === "paper") {
        imgs.appendChild(paperImageTwo);
    } else if (computerSelection === "scissors") {
        imgs.appendChild(scissorsImageTwo);
    }

    //updates the round result and score appropriately
    if (playerSelection === "rock" && computerSelection === "scissors") {
        roundResult.textContent = "You win! Rock beats scissors!"
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        roundResult.textContent = "You win! Paper beats rock!";
        playerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        roundResult.textContent = "You win! Scissors beats paper!"
        playerScore++;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        roundResult.textContent = "You lose! Paper beats rock!"
        computerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        roundResult.textContent = "You lose! Scissors beats paper";
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        roundResult.textContent = "You lose! Rock beats scissors";
        computerScore++;
    } else {
        roundResult.textContent = "It's a tie!";
    }

    score.textContent = "Score: " + playerScore + " - " + computerScore;

    //win/lose conditions
    if (playerScore === 3) {
        finalOutcome.textContent = "You Won!"
        finalScore.textContent = "Final " + score.textContent;
        modal.style.display = "block";
    } else if (computerScore === 3) {
        finalOutcome.textContent = "You Lost!"
        finalScore.textContent = "Final " + score.textContent;
        modal.style.display = "block";
    }
}

//initializing the scores
let playerScore = 0;
let computerScore = 0;
let roundResult = document.getElementById(`round-result`);
let score = document.getElementById(`score`)
let finalOutcome = document.getElementById(`final-outcome`);
let finalScore = document.getElementById(`final-score`);


//imgs div
const imgs = document.getElementById("imgs");


//images for player
const rockImage = document.createElement("img");
rockImage.src = "images/rock.png";

const paperImage = document.createElement("img");
paperImage.src = "images/paper.png";

const scissorsImage = document.createElement("img");
scissorsImage.src = "images/scissors.png";


//images for computer
const rockImageTwo = document.createElement("img");
rockImageTwo.src = "images/rock.png";

const paperImageTwo = document.createElement("img");
paperImageTwo.src = "images/paper.png";

const scissorsImageTwo = document.createElement("img");
scissorsImageTwo.src = "images/scissors.png";


//code for modal
let modal = document.getElementById(`modal`);
let close = document.getElementById(`close`);

close.addEventListener("click", () => {
    modal.style.display = "none";
    playerButtons.forEach((button) => {
        button.disabled = true;
    });
})


//adding event listeners for rock, paper, scissors buttons
const playerButtons = document.querySelectorAll(`.playerChoice`);
playerButtons.forEach((button) => {
    button.addEventListener("click", () => playRound(button.value, getComputerChoice()));
});