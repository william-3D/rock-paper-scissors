function getComputerChoice (str) {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
    switch(randomNumber){
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;
    }
    }

