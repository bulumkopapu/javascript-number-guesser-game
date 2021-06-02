let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (userGuess, computerGuess, targetNum) => {
    let userAbsoluteScore = Math.abs(targetNum - userGuess); 
    let computerAbsoluteScore = Math.abs(targetNum - computerGuess); 
    if (userGuess > 9){
        return alert('User number is out of range.');
    } else if (userGuess <= 9) {
        if(userAbsoluteScore <  computerAbsoluteScore){
            return true;
            //console.log("User wins True");
        } else if (userAbsoluteScore > computerAbsoluteScore) {
            return false;
            //console.log("Computer wins False");
        } else {
        return true;
        //console.log("User wins True. But it was tie");
        }
     }
}

const updateScore = winnerIs =>{
    if(winnerIs === 'human'){
        humanScore++;
    } else if (winnerIs === 'computer'){
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++;




