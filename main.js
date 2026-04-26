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


let humanScore = 0
let computerScore = 0

const buttons = document.querySelectorAll(".game-btn")
const result = document.querySelector(".result")


function gameOver(){
    if(humanScore == 5){
        result.textContent = "You Won The Game! :)"
    }
    else if(computerScore == 5){
        result.textContent = "You Lost The Game! :("
    }

    buttons.forEach(btn => btn.disabled = true)
}

function playRound(humanChoice){

    const msg = document.querySelector(".msg")
    const score = document.querySelector(".score")

    let computerChoice = getComputerChoice()

    if( (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ){
        humanScore++;
        msg.textContent = 'Won! Your ' + humanChoice + ' Beats ' + computerChoice
    }
    else if((computerChoice === 'rock' &&  humanChoice === 'scissors') ||
            (computerChoice === 'scissors' && humanChoice === 'paper') ||
            (computerChoice  === 'paper' && humanChoice === 'rock')
    ){
        computerScore++;
         msg.textContent = 'Lost! Your ' + humanChoice + ' Beaten By ' + computerChoice
    }
    else if(computerChoice === humanChoice){
         msg.textContent = "It's a Tie"
    }

    score.textContent = "Your Score: " + humanScore + " and Computers Score: " + computerScore

    if(humanScore == 5 || computerScore == 5) gameOver()
}

document.querySelector("#rock").addEventListener("click", () => playRound("rock"))
document.querySelector("#paper").addEventListener("click", () => playRound("paper"))
document.querySelector("#scissors").addEventListener("click", () => playRound("scissors"))

