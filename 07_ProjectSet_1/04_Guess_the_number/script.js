let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlots = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowerhi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement("p")

let prevGuess = []
let newGuess = 1
let playGame = true

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        
        validateGuess(guess)
    })
}
function validateGuess(guess){
    if (isNaN(guess)) {
        alert("PLease enter a valid number")
    }
    if (guess < 1) {
        alert("PLease enter number greater then 1")
    }
    if (guess > 100) {
        alert("PLease enter number less then 100")
    } else {
        prevGuess.push(guess)
        if (newGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game over random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if (guess === randomNumber) {
        displayMessage("You guessed it right")
        endGame()
    }
    if (guess < randomNumber) {
        displayMessage("Number is too low")
    }
    if (guess > randomNumber) {
        displayMessage("Number is too high")
    }
}

function displayGuess(guess){
    //
}

function displayMessage(message){
    //
}

function endGame(){
    //
}

function newGame(){
    //
}