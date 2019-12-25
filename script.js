

function computerPlay(){
    let aiChoice = Math.floor(Math.random()*3);
  let aiSymbol = (aiChoice === 0) ? "Rock" 
    : aiChoice === 1 ? "Paper" 
    : aiChoice === 2 ? "Scissors"
    : "error";
    return aiSymbol;
}
var ai;
var winner;

function singleRound(){
    let hum;
    var legalChoice = false;
    while (legalChoice === false) {
        hum = prompt("Choose Rock, Paper, or Scissors")
        hum = hum.toLowerCase();
        if(hum === 'rock' || hum === 'paper' || hum === 'scissors') {
            legalChoice = true;
        }  
    }
    
    
    
    
    ai = computerPlay();
    let finalDeclaration = "Tie Game."
    ai = ai.toLowerCase();
    
    
    let result = (ai === hum)? "tie"
    : ((hum === "rock" || ai ==="rock") && (hum ==="paper" || ai ==="paper"))? "paper"
    : ((hum === "scissors" || ai ==="scissors") && (hum ==="rock" || ai ==="rock"))? "rock"
    : ((hum === "paper" || ai ==="paper") && (hum ==="scissors" || ai ==="scissors"))? "scissors"
    : "error";
    
    if(result === "tie"){
        winner = "tie"
        } else if(ai === result){
            winner = "Computer"
        } else if(hum === result){
            winner = "Human"
        }
    finalDeclaration = (winner === "Human")? `You Win! ${hum.toUpperCase()} beats ${ai.toUpperCase()}.`
    : (winner === "Computer")? `You Lose! ${ai.toUpperCase()} beats ${hum.toUpperCase()}.`
    : (winner = "tie")? `Tie Game. You both threw ${hum.toUpperCase()}.`
    : "ERROR!"
        return finalDeclaration;
};
var numOfGames = 5;
function game(){
    let bestOfWinner = 'tie'
    let aiTotal = 0;
    let humTotal = 0;
    while((aiTotal+humTotal) < numOfGames){
        console.log(singleRound());
        switch (winner) {
            case "Computer":
                aiTotal++
                break;
            case "Human":
                humTotal++
            default:
                break;
        }
    }
(aiTotal>humTotal)? bestOfWinner = "Computer":(humTotal>aiTotal)? bestOfWinner="Human": bestOfWinner="tie";  
return `${bestOfWinner} wins. Human: ${humTotal}. Computer: ${aiTotal}.`
}


    



