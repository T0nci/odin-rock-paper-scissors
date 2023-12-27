function getComputerChoice() {
    // This will return 0, 1 or 2 - no decimals
    choice = Math.floor(Math.random() * 3);

    // After a bit of thinking, when employing a strategy,
    // the most favoured(statistically most shown) is the 0 (0 - 0.3(3)) then the 2 (0.6(6) - 0.34 = 0.32(6)) then the 1 (0.9(9) - 0.67 = 0.32(9))
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return;
    }
}


function playRound(playerSelection, computerSelection) {
    // Make the users choice error free
    playerSelection = playerSelection.toLowerCase()
    playerSelection = playerSelection.trim();

    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    playerSelection = prompt("Draw! Rock and Rock. Type in your choice again: Rock | Paper | Scissors");
                    computerSelection = getComputerChoice();
                    return playRound(playerSelection, computerSelection);
                case "paper":
                    console.log("You lose! Paper beats Rock");
                    return false;
                case "scissors":
                    console.log("You win! Rock beats Scissors")
                    return true;
                default:
                    return;
            }
        case "paper":
            switch (computerSelection) {
                case "rock":
                    console.log("You win! Paper beats Rock")
                    return true;
                case "paper":
                    playerSelection = prompt("Draw! Paper and Paper. Type in your choice again: Rock | Paper | Scissors");
                    computerSelection = getComputerChoice();
                    return playRound(playerSelection, computerSelection);
                case "scissors":
                    console.log("You lose! Scissors beats Paper");
                    return false;
                default:
                    return;
            }
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    console.log("You lose! Rock beats Scissors");
                    return false;
                case "paper":
                    console.log("You win! Scissors beats Paper!");
                    return true;
                case "scissors":
                    playerSelection = prompt("Draw! Scissors and Scissors. Type in your choice again: Rock | Paper | Scissors");
                    computerSelection = getComputerChoice();
                    return playRound(playerSelection, computerSelection);
                default:
                    return;
            }
        default:
            return;
    }
}


function game() {
    let playerChoice;
    let computerChoice;
    let playerPoints = 0;
    let computerPoints = 0;

    for (let i = 0; i < 5; i++) {
        playerChoice = prompt("Type in your choice: Rock | Paper | Scissors");
        computerChoice = getComputerChoice();
        console.log(`Computer choice: ${computerChoice}`);

        winner = playRound(playerChoice, computerChoice);

        if (winner === true) {
            playerPoints++;
        }
        else {
            computerPoints++;
        }
    }

    if (playerPoints > computerPoints) {
        console.log("Game over. You win!")
    }
    else {
        console.log("Game over. You lose!")
    }
}

game();
