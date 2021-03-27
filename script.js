let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// part 3. generateTarget function to generate a random integer between 0 and 9. 

const generateTarget=()=>{
    return Math.floor(Math.random()*9);
};

// part 8. function to return absolute distance between two numbers.
const getAbsoluteDistance=(num1, num2)=>{
    return Math.abs(num1-num2);
};

// part 4. function called each round to compare human and computer guesses to target.
function compareGuesses(humanGuess, computerGuess, targetNumber){
    if (getAbsoluteDistance(humanGuess, targetNumber) === getAbsoluteDistance(computerGuess, targetNumber)){
        return true; // if tied, human wins,
    } else if (getAbsoluteDistance(humanGuess, targetNumber) < getAbsoluteDistance(computerGuess, targetNumber)){
        return true; // if human wins, return true
    }
    else {
        return false; // if computer wins, return false
    }
};

// part 5. function to update winner's score after each round. humanScore, computerScore

const updateScore=stringInput=>{
    switch(stringInput){
        case 'human':
            humanScore++;
            break;
        case 'computer':
            computerScore++;
            break;
        default:
            break; 
    };
};

// part 6. advance round function to update round number after each round.
const advanceRound=()=>{currentRoundNumber++;}; 

// part 7. test code with sample inputs

console.log( compareGuesses(3,0,3)) // expect true
console.log( compareGuesses(3,3,3)) // expect true
console.log( compareGuesses(1,3,3)) // expect false

updateScore('human');
console.log(`human score is ${humanScore}, computer score is ${computerScore}`); //expect 1, 0
updateScore('computer');
console.log(`human score is ${humanScore}, computer score is ${computerScore}`); //expec 1, 1

advanceRound();
advanceRound();
console.log(currentRoundnumber); //expect 3