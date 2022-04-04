const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissors = document.querySelector('#scissors');
const main = document.querySelector('main');
let userWins = 0;
let computerWins = 0;
let tie = 0;
let text = " ";
const count = function(){ 
    const template = `
     <p>Wins: ${userWins}</p>
     <p>Losses: ${computerWins}</p>
     <p>Ties: ${tie}</p>
     <p>${text}</p>

`;
main.innerHTML = template;
}
count();

const play = function(userChoice){
    let randomNumber = Math.floor(Math.random() * 3);
    //console.log (randomNumber);
    let computerChoice;
        if (randomNumber === 0) {
            computerChoice = "Rock";
        } else if (randomNumber === 1){
            computerChoice = "Paper";
        } else {
            computerChoice ="Scissors";
        }
    console.log (computerChoice);
    
    if (computerChoice === "Rock" && userChoice === "Paper") {
        userWins++;
        text = "You won! " + userChoice + " beats " + computerChoice + ".";
    } else if (computerChoice === "Paper" && userChoice === "Scissors"){
        text = "You won! " + userChoice + " beats " + computerChoice + ".";
        userWins++;
    } else if (computerChoice === "Scissors" && userChoice === "Rock"){
        userWins++;
        text = "You won! " + userChoice + " beats " + computerChoice + ".";
    } else if (computerChoice === userChoice){
        tie++;
        text = "It's a tie.";
    } else {
        computerWins++;
        text = "You lost. The computer chose " + computerChoice + " which beats " + userChoice + ".";
    }

console.log ("Wins:" + userWins);
console.log ("Ties:" + tie);
console.log ("Losses:" + computerWins);
count();
}

buttonRock.addEventListener("click", function(){
    console.log ("Rock");
    play("Rock");
})
buttonPaper.addEventListener("click", function(){
    console.log ("Paper");
    play("Paper");
})
buttonScissors.addEventListener("click", function(){
    console.log ("Scissors");
    play("Scissors");
})




    
