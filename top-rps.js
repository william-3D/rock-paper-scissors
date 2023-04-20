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
    
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        return "You win! Rock beats scissors!";
        
    } else if (userChoice === "rock" && computerChoice === "paper") {
        return "You lose! Paper beats rock!";
        
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        return "You lose! Scissors beats paper!";
        
    } else if (userChoice === "paper" && computerChoice === "rock") {
        return "You win! Paper beats rock!";
        
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        return "You win! Scissors beats paper!";
        
    } else if (userChoice === "scissors" && computerChoice === "rock") {
        return "You lose! Rock beats scissors!";
        
    }
    resultDisplay.innerHTML = result;
}

