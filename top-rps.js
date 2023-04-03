sign = window.prompt("Rock, paper or scissors?");

const computerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const roundResult = document.getElementById("result");
let userChoice; // globally saved so can be accessed wherever

// to pick out created buttons
const possibleChoices = document.querySelectorAll("button");

// clicking any button makes something happen
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id
}))


function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 1){
        computerChoice = "Rock";
    }
    if (randomNumber === 2){
        computerChoice = "Paper";
    }
    if (randomNumber === 3){
        computerChoice = "Scissors";
    }
}


function game() {
    function playRound (userChoice, computerChoice) {
        userChoice = userChoice.toLowerCase();
        
        if (userChoice === computerChoice) {
            roundResult.textContent = "It's a tie!";
        }else if (userChoice == "rock" && computerChoice == "scissors") {
            roundResult.textContent = "You win! Rock beats scissors!";
            return "Success!"
        }else if (userChoice == "rock" && computerChoice == "paper") {
            roundResult.textContent = "You lose! Paper beats rock!";
            return "Epic fail"
        }else if (userChoice == "paper" && computerChoice == "scissors") {
            roundResult.textContent = "You lose! Scissors beats paper!";
            return "Epic fail"
        }else if (userChoice == "paper" && computerChoice == "rock") {
            roundResult.textContent = "You win! Paper beats rock!";
            return "Success!"
        }else if (userChoice == "scissors" && computerChoice == "paper") {
            roundResult.textContent = "You win! Scissors beats paper!";
            return "Success!"
        }else if (userChoice == "scissors" && computerChoice == "rock") {
            roundResult.textContent = "You lose! Rock beats scissors!";
            return "Epic fail"
    }
    }

}