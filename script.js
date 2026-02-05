let computerScore = 0;
let humanScore = 0;

function getComputerChoice()
{
    const choice = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}

function getHumanChoice()
{
    return prompt("Enter Rock, Paper, Scissors: ").toLowerCase();
}


function playRound(humanChoice, computerChoice)
{
    if (humanChoice === computerChoice) {
        console.log("Both chose the same!");
    }
    else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log("Rock beats Scissors!");
        humanScore++;
    }
    else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log("Paper beats Rock!");
        humanScore++;
    }
    else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log("Scissors beats Paper!");
        humanScore++;
    }
    else {
        console.log(`${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

function playGame()
{
    for (let index = 0; index < 5; index++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }
    if(humanScore > computerScore)
        console.log("Human wins!");
    else if (humanScore < computerScore) 
        console.log("Computer wins!");
    else
        console.log("It is a Tie!");
}


playGame();