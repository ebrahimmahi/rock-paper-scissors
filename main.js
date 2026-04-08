function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            return;
    }
}


function getHumanChoice(){
    return prompt("Enter rock, paper or scissors: ").toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

    if( (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ){
        humanScore++;
        alert('You Win! Your ' + humanChoice + ' Beats ' + computerChoice);
    }
    else if((computerChoice === 'rock' &&  humanChoice === 'scissors') ||
            (computerChoice === 'scissors' && humanChoice === 'paper') ||
            (computerChoice  === 'paper' && humanChoice === 'rock')
    ){
        humanScore++;
        alert('You Win! Your ' + humanChoice + ' Beaten By ' + computerChoice);
    }
    else if(computerChoice == humanChoice){
        alert("Tie");
    }

    alert("Your Score: " + humanScore + " and Computers Score: " + computerScore);
}

for(let i = 1; i <= 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

if(humanScore > computerScore){
    alert("Congratulations, You Won The Match");
}
else if(humanScore < computerScore){
    alert("Computer Wins");
}
else{
    alert("It's a Tie!");
}