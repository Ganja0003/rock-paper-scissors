function computerPlay(){
    const arrOfChoices = ['rock', 'paper', 'scissors'];
    const randomNum = choose[Math.floor(Math.random() * choose.length)];
    return arrOfChoices[randomNum];
}

const playRound = (playerSelection,computerSelection) =>{
    if(playerSelection === computerSelection){
        return 'you tied! you both picked ${playerSelection}';
    }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        compScore++
        return ' you lost! Rock crushes scissors'
    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++
        return ' you won! Scissors cuts paper'
    }else if(playerSelection === 'rock' && computerSelection === 'paper'){
        compScore++
        return ' you lost! Paper covers Rock'
    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++
        return ' you won! Rock crushes scissors'
    }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        compScore++
        return ' you lost! Scissors cuts paper'
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++
        return ' you won! Paper covers rock'
    }

}


const game = () => {
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt('choose what to throw', 'Rock,Paper,Scissors').toLowerCase();
        const computerSelection = computerPlay;
    } 

    if(playerScore > compScore){
        return 'You beat the computer! You Are a genius!'
    }else if (playerScore < compScore){
        return 'You got by beat the computer! Practice'
    }else{
        return 'You tied with the computer! Come again'
    }

}

