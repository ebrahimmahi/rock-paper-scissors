function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
        default:
            return;
    }
}


function getHumanChoice(){
    return prompt("Enter rock, paper or scissor: ").toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

    if(humanChoice === 'rock' && computerChoice === 'scissor'){
        humanScore++;
        alert('You Win! Your Rock Beats Scissor');
    }
    else if(humanChoice === 'scissor' && computerChoice === 'paper'){
        humanScore++;
        alert('You Win! Your Scissor Beats Paper');
    }
    else if(humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore++;
        alert('You Win! Your Paper Beats Rock');
    }
    else if( computerChoice === 'rock' &&  humanChoice === 'scissor'){
        computerScore++;
        alert('Computer Wins!  Your Scissor Beaten By Rock');
    }
    else if(computerChoice === 'scissor' && humanChoice === 'paper'){
        computerScore++;
        alert('Computer Wins! Your Paper Beaten Scissor');
    }
    else if(computerChoice  === 'paper' && humanChoice === 'rock'){
        computerScore++;
        alert('Computer Wins! Your Rock Beaten Paper');
    }

    alert("Your Score: " + humanScore + " and Computers Score: " + computerScore);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);