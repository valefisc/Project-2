const main = document.querySelector('main');
const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissors = document.querySelector('#scissors');

let userWins = 0;
let computerWins = 0;
let tie = 0;
const template = `
        <p>Wins: ${userWins}</p>
        <p>Losses: ${computerWins}</p>
        <p>Ties: ${tie}</p>
    `;
main.innerHTML = template.join('');
 

let userChoice;
buttonRock.addEventListener("click", function(){
    userChoice = "r";
})
buttonPaper.addEventListener("click", function(){
    userChoice = "p";
})
buttonScissors.addEventListener("click", function(){
    userChoice = "s";
})

let randomNumber = Math.floor(Math.random() * 3);
console.log (randomNumber);
let computerChoice;
    if (randomNumber === 0) {
        computerChoice = "r";
    } else if (randomNumber === 1){
        computerChoice = "p";
    } else {
        computerChoice ="s";
    }
console.log (computerChoice);

    
if (computerChoice === "r" && userChoice === "p") {
        userWins++;
    } else if (computerChoice === "p" && userChoice === "s"){
        userWins++;
    } else if (computerChoice === "s" && userChoice === "r"){
        userWins++;
    } else if (computerChoice === userChoice){
        tie++;
    } else {
        computerWins++;
    }
}