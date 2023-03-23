function getComputerChoices() {
    const randomNumber = Math.floor(Math.random() * 3);
    
    switch(randomNumber){
        case 0:
            return = "Rock";
            break;
        case 1:
            return = "Paper";
            break;
        case 2:
            return = "Scissors";
            break;
    }
}
    function playRound (playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        
        if (playerSelection === computerSelection) {
            roundResult.textContent = "It's a tie!";
        }else if (playerSelection == "rock" && computerSelection == "scissors") {
            roundResult.textContent = "You win! Rock beats scissors!";
        }else if (playerSelection == "rock" && computerSelection == "paper") {
            roundResult.textContent = "You lose! Paper beats rock!";
        }else if (playerSelection == "paper" && computerSelection == "scissors") {
            roundResult.textContent = "You lose! Scissors beats paper!";
        }else if (playerSelection == "paper" && computerSelection == "rock") {
            roundResult.textContent = "You win! Paper beats rock!";
        }else if (playerSelection == "scissors" && computerSelection == "paper") {
            roundResult.textContent = "You win! Scissors beats paper!";
        }else if (playerSelection == "scissors" && computerSelection == "rock") {
            roundResult.textContent = "You lose! Rock beats scissors!";
            
    }
    }