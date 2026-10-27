async function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        console.log(`Round ${i + 1}`)
        
        console.log(`Your Score: ${humanScore} :: Computer Score: ${computerScore}`);

        console.log(`You: ${humanChoice}`);
        console.log(`Computer: ${computerChoice}`);

        const result = playRound(humanChoice, computerChoice);

        console.log(result);

        await sleep(5000);
    }

    if (computerScore > humanScore) {
        console.log(`You lose the game!`);
    } else {
        console.log(`You win the game!`);
    }

    return;
    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock") {
            switch (computerChoice) {
                case "rock":
                    return "Tied between Rock and Rock";
                case "paper":
                    computerScore++;
                    return "You lose! Paper beats Rock";
                case "scissors":
                    humanScore++;
                    return "You win! Rock beats Scissors";
            }
        }
    
        if (humanChoice === "paper") {
            switch (computerChoice) {
                case "rock":
                    humanScore++;
                    return "You win! Paper beats Rock";
                case "paper":
                    return "Tied between Paper and Paper";
                case "scissors":
                    computerScore++;
                    return "You lose! Scissors beat Paper";
            }
        }
    
        if (humanChoice === "scissors") {
            switch (computerChoice) {
                case "rock":
                    computerScore++;
                    return "You lose! Rock beats Scissors";
                case "paper":
                    humanScore++;
                    return "You win! Scissors beat Paper";
                case "scissors":
                    return "Tied between Scissors and Scissors";
            }
        }
    }
}


function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "paper";
    }
}

function getHumanChoice() {
    const choice = prompt("What is your choice?");
    return choice.toLowerCase();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

playGame();