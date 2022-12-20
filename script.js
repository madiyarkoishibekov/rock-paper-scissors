const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

const content = document.createElement('div');
content.setAttribute('id', 'score');

const rockButton = document.createElement('button');
rockButton.setAttribute('id', 'rock');
rockButton.textContent = 'Rock';

const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
paperButton.setAttribute('id', 'paper');

const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';
scissorsButton.setAttribute('id', 'scissors');
document.body.append(content, rockButton, paperButton, scissorsButton);

game();

function game()
{
    const buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach(button => button.addEventListener('click', () => {
        const playerSelection = button.innerText;
        playRound(playerSelection, getComputerChoice());
    }));
}

function playRound(playerSelection, computerSelection)
{
    if (GameEnded())
    {
        document.querySelector('#score').textContent = getGameReport();
    }
    else 
    {
        let message;
        if (choices.indexOf(playerSelection) === choices.indexOf(computerSelection))
        {
            message = `Draw! ${playerSelection} cannot beat ${computerSelection}. The score is ${playerScore} : ${computerScore}`;
            document.querySelector('#score').textContent = message;
        }
        else if (choices.indexOf(playerSelection) === choices.indexOf(computerSelection) - 1 || choices.indexOf(playerSelection) - 2 === choices.indexOf(computerSelection))
        {
            computerScore++;
            if (!GameEnded()) 
            {
                message = `Computer beats! ${playerSelection} beaten by ${computerSelection}. The score is ${playerScore} : ${computerScore}`;
                document.querySelector('#score').textContent = message;
            }
        }
        else 
        {
            playerScore++;
            if (!GameEnded())
            {
                message = `You beat! ${e.target.innerText} beats ${computerSelection}. The score is ${playerScore} : ${computerScore}`;
                document.querySelector('#score').textContent = message;
            }
        }
    } {
        once: false
    }
}

function getComputerChoice()
{
    return choices[~~(Math.random() * choices.length)];
}

function GameEnded()
{
    if (computerScore === 5 || playerScore === 5)
    {
        return true;
    }
    return false;
}

function getGameReport()
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