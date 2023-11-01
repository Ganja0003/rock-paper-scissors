const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.computer-score')
const p = document.createElement('p');




let compScore = 0;
let playerScore = 0;

const computerPlay = () =>{
    const arrOfChoices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * arrOfChoices.length);
    return arrOfChoices[randomNum];
     
}

const playRound = (playerSelection,computerSelection) =>{
    if(playerSelection === computerSelection){
        console.log('1',playerSelection, '2', computerSelection)
        p.innerText = `you tied! you both picked ${playerSelection}`;
        outcomeDiv.appendChild(p)
    }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        compScore++
        p.innerText = ' you lost! Rock crushes scissors'
        outcomeDiv.appendChild(p)
    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++
        p.innerText = ' you won! Scissors cuts paper'
        outcomeDiv.appendChild(p)
    }else if(playerSelection === 'rock' && computerSelection === 'paper'){
        compScore++
        p.innerText = ' you lost! Paper covers Rock'
        outcomeDiv.appendChild(p)
    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++
        p.innerText = ' you won! Rock crushes scissors'
        outcomeDiv.appendChild(p)
    }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        compScore++
        p.innerText = ' you lost! Scissors cuts paper'
        outcomeDiv.appendChild(p)
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++
        p.innerText = ' you won! Paper covers rock'
        outcomeDiv.appendChild(p)
    }

}


const checkForWinner = (playerScore,compScore) => {
    if (playerScore === 5){
        const h2 = document.createElement('h2')
        h2.classList.add('playerWon')
        h2.innerHTML = `You won ${playerScore} to ${compScore} great job beating the computer`
        outcomeDiv.append(h2)
        outcomeDiv.removeChild(p)
    }else if(compScore === 5){
        const h2 = document.createElement('h2')
        h2.classList.add('CompWon')
        h2.innerHTML = `You lost ${playerScore} to ${compScore} you got beat by the computer`
        outcomeDiv.append(h2)
        outcomeDiv.removeChild(p)
    }
}

const updateScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}`
    computerScoreSpan.innerText = `Computer Score: ${computerScore}`
}

rockButton.addEventListener('click' , () => {
    const computerSelection = computerPlay();
    const playerSelection = 'rock'
    playRound(playerSelection,computerSelection)
    updateScores(playerScore,compScore)
    checkForWinner(playerScore,compScore)
})

paperButton.addEventListener('click' , () => {
    const computerSelection = computerPlay();
    const playerSelection = 'paper'
    playRound(playerSelection,computerSelection)
    updateScores(playerScore,compScore)
    checkForWinner(playerScore,compScore)
})
scissorsButton.addEventListener('click' , () => {
    const computerSelection = computerPlay();
    const playerSelection = 'scissors'
    playRound(playerSelection,computerSelection)
    updateScores(playerScore,compScore)
    checkForWinner(playerScore,compScore)
})
const game = () => {
    //for(let i = 0; i < 5; i++){
      //  const playerSelection = prompt('choose what to throw', 'Rock,Paper,Scissors').toLowerCase();
        //const computerSelection = computerPlay();
        //console.log( playRound(playerSelection,computerSelection))
    //} 

    if(playerScore > compScore){
        return 'You beat the computer! You Are a genius!'
    }else if (playerScore < compScore){
        return 'You got by beat the computer! Practice'
    }else{
        return 'You tied with the computer! Come again'
    }

}

console.log(game());