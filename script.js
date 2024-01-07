const computerChoiceDisplay = document.getElementById("pc-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.querySelector("#result-choice")
const possibleChoices = document.querySelectorAll("button")  //As all your buttons are going to be part of the game you can use the querySelectorAll   
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) =>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML  = userChoice
    generateComputerChoice();
    getresult();
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * userChoice.length) //or * 3 (is the same) //Math.floor round down a decimal number and Math.ceil round upper 
    console.log(randomNumber)

    if(randomNumber === 1){
        computerChoice = "rock"
    }
    if(randomNumber === 2){
        computerChoice = "paper"
    }
    if(randomNumber === 3){
        computerChoice = "scissors"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getresult(){
    if(userChoice === computerChoice)
        result = "It's a draw"
    if(userChoice === "rock" && computerChoice === "scissors") 
        result = "You win"
    if(userChoice === "rock" && computerChoice === "paper") 
        result = "You lose"
    if(userChoice === "paper" && computerChoice === "scissors") 
        result = "You lose"
    if(userChoice === "paper" && computerChoice === "rock") 
        result = "You win"
    if(userChoice === "scissors" && computerChoice === "rock") 
        result = "You lose"
    if(userChoice === "scissors" && computerChoice === "paper") 
        result = "You win "
    resultDisplay.innerHTML = result
}