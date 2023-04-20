const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button"); // to pick out created buttons

let userChoice; // globally saved so can be accessed wherever
let computerChoice;
let result; 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id; // clicking button gets id
    userChoiceDisplay.innerHTML = userChoice;
    getComputerChoice();
    playRound();
}))

// randomly generates computer choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (randomNumber === 1){
        computerChoice = "rock";
    }
    if (randomNumber === 2){
        computerChoice = "paper";
    }
    if (randomNumber === 3){
        computerChoice = "scissors";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function playRound() {
    restart.style.display = "inline-block";
    let score = 0;
    
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if ( 
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
        score++;
        document.getElementById('player-score').textContent = score;
    } else if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
    ) {
        result = "You lose!";
        score++;
        document.getElementById('computer-score').textContent = score;
    }
    resultDisplay.innerHTML = result;
}

// make score reset when press restart