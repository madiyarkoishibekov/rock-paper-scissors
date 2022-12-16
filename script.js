const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

game();

function game()
{
    for (let i = 0; i < 5; i++)
    {
        playRound(getPlayerChoice(), getComputerChoice());
    }

    console.log(getGameReport(playerScore, computerScore));
}

function playRound(playerSelection, computerSelection)
{
    let message;

    if (choices.indexOf(playerSelection) === choices.indexOf(computerSelection))
    {
        message = `Draw! ${playerSelection} cannot beat ${computerSelection}`;
        console.log(message);
    }
    else if (choices.indexOf(playerSelection) === choices.indexOf(computerSelection) - 1 || choices.indexOf(playerSelection) - 2 === choices.indexOf(computerSelection))
    {
        message = `You lose! ${playerSelection} beaten by ${computerSelection}`;
        console.log(message);
        computerScore++;
    }
    else 
    {
        message = `You won! ${playerSelection} beats ${computerSelection}`;
        console.log(message);
        playerScore++;
    }
}

function getComputerChoice()
{
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getPlayerChoice()
{
    let choice = prompt("Chose Rock, Paper or scissors");
    if (choices.indexOf(choice) !== -1)
    {
        return choice;
    }
    else 
    {
        getPlayerChoice();
    }
}

function getGameReport(playerScore, computerScore)
{
    let score = `The final score ${playerScore} - ${computerScore}.`
    let reportMessage;

    if (playerScore === computerScore)
    {
        reportMessage = "Draw.";
    }
    else if (playerScore > computerScore)
    {
        reportMessage = "You win.";
    }
    else 
    {
        reportMessage = "You lose."
    }

    return score + " " + reportMessage;
}