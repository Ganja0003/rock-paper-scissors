function getComputerChoice(){
    choose = ['rock', 'paper', 'scissors'];
    return choose[Math.floor(Math.random() * choose.length)];
}

function playRound(playerSelection,computerSelection){
    if(playerSelection === computerSelection){
        return 'its a tie';
    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
    return 'you win';
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
    return 'you win';
    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
    return 'you win';
    }else{
        return 'you lost'
    } 
}
    const playerSelection = prompt('enter either: rock,paper,scissors').toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection,computerSelection))

/*function game(){
for (let i = 0; i < 5; i++){
    
}
if(playerSelection > computerSelection){
    return 'you beat the computer'
}else if(playerSelection < computerSelection){
    return 'you lost to the computer'
}else{
    return 'its a tie'
}

}
*/