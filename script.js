let computerScore = 0;
let humanScore = 0;
let gameOver = false;

const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");
const winnerDiv = document.querySelector("#winner");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateScore() {
    scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

function checkWinner() {
    if (humanScore === 5 || computerScore === 5) {
        gameOver = true;

        if (humanScore > computerScore) {
            winnerDiv.textContent = "🎉 You win the game!";
        } else {
            winnerDiv.textContent = "💻 Computer wins the game!";
        }
    }
}

function playRound(humanChoice) {
    if (gameOver) return;

    const computerChoice = getComputerChoice();
    let resultText = "";

    if (humanChoice === computerChoice) {
        resultText = "It's a tie!";
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        resultText = "Rock beats Scissors!";
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        resultText = "Paper beats Rock!";
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        resultText = "Scissors beats Paper!";
        humanScore++;
    }
    else {
        resultText = `${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    resultsDiv.textContent = resultText;
    updateScore();
    checkWinner();
}

document.querySelector("#rock").addEventListener("click", () => playRound("rock"));
document.querySelector("#paper").addEventListener("click", () => playRound("paper"));
document.querySelector("#scissors").addEventListener("click", () => playRound("scissors"));

updateScore();

// function playGame()
// {
//     for (let index = 0; index < 5; index++) {
//         const computerChoice = getComputerChoice();
//         const humanChoice = getHumanChoice();
//         playRound(humanChoice, computerChoice);
//     }
//     if(humanScore > computerScore)
//         console.log("Human wins!");
//     else if (humanScore < computerScore) 
//         console.log("Computer wins!");
//     else
//         console.log("It is a Tie!");
// }


// playGame();
