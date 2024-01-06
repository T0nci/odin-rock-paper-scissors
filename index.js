function getComputerChoice() {
    // This will return 0, 1 or 2 - no decimals
    choice = Math.floor(Math.random() * 3);

    // After a bit of thinking, when employing a strategy, 
    // the most favoured(statistically most shown) is 0 (0 - 0.3(3)) 
    // then 2 (0.9(9) - 0.67 = 0.32(9)) then 1 (0.6(6) - 0.34 = 0.32(6))
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
    // Make the users choice easy to compare
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.trim();

    // Return true if player wins, 
    // otherwise false(computer win, or player not choosing any option)
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    return ["Draw! Rock and Rock!", null]
                case "paper":
                    return ["You lose! Paper beats Rock", false];
                case "scissors":
                    return ["You win! Rock beats Scissors", true];
                default:
                    return ["ERROR"];
            }

        case "paper":
            switch (computerSelection) {
                case "rock":
                    return ["You win! Paper beats Rock", true];
                case "paper":
                    return ["Draw! Paper and Paper", null];
                case "scissors":
                    return ["You lose! Scissors beats Paper", false];
                default:
                    return ["ERROR"];
            }

        case "scissors":
            switch (computerSelection) {
                case "rock":
                    return ["You lose! Rock beats Scissors", false];
                case "paper":
                    return ["You win! Scissors beats Paper", true];
                case "scissors":
                    return ["Draw! Scissors and Scissors"];
                default:
                    return ["ERROR"];
            }
            
        default:
            return ["ERROR"];
    }
}


function playGame(event) {
    button = event.target;
    computerChoice = getComputerChoice();
    
    results = playRound(button.getAttribute('id'), computerChoice);

    // Show computer choice
    switch(computerChoice) {
        case "rock":
            computerButton.setAttribute(
                "src", "./images/rock-paper-scissors-296854_1280.png"
            );
            break;
        case "paper":
            computerButton.setAttribute(
                "src", "./images/rock-paper-scissors-296855_1280.png"
            );
            break;
        case "scissors":
            computerButton.setAttribute(
                "src", "./images/rock-paper-scissors-296853_1280.png"
            );
            break;
    }
    // End

    roundResult.textContent = results[0];
    if (results[1] === true) {
        playerPoints++;
    } else if (results[1] === false) {
        computerPoints++;
    }

    if (playerPoints !== 5 && computerPoints !== 5) {
        gameResult.textContent = `${playerPoints} - ${computerPoints}`;
    } else if (playerPoints === 5) {
        gameResult.innerHTML = `${playerPoints} - ${computerPoints}<br>
        Game over. You win!`;
        btnRock.removeEventListener("click", playGame);
        btnPaper.removeEventListener("click", playGame);
        btnScissors.removeEventListener("click", playGame);
    } else {
        gameResult.innerHTML = `${playerPoints} - ${computerPoints}<br>
        Game over. You lose!`;
        btnRock.removeEventListener("click", playGame);
        btnPaper.removeEventListener("click", playGame);
        btnScissors.removeEventListener("click", playGame);
    }
}

let playerPoints = 0;
let computerPoints = 0;

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

const roundResult = document.querySelector(".game-information > .round-result");
const gameResult = document.querySelector(".game-information > .game-result");

const computerButton = document.querySelector("#computer-choice");

btnRock.addEventListener("click", playGame);
btnPaper.addEventListener("click", playGame);
btnScissors.addEventListener("click", playGame);
