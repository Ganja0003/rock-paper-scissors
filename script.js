const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')

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
        const p = document.createElement('p');
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

rockButton.addEventListener('click' , () => {
    const computerSelection = computerPlay();
    const playerSelection = 'rock'
    playRound(playerSelection,computerSelection)
})

paperButton.addEventListener('click' , () => {
    const computerSelection = computerPlay();
    const playerSelection = 'paper'
    playRound(playerSelection,computerSelection)
})
scissorsButton.addEventListener('click' , () => {
    const computerSelection = computerPlay();
    const playerSelection = 'scissors'
    playRound(playerSelection,computerSelection)
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