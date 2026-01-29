

let arr = [];
for (let i = 0; i <= 100; i++) {
    arr.push(i)
    console.log(arr[i])
}

let index = (Math.floor(Math.random() * arr.length))
let random = arr[index]
console.log(index)
console.log(random)

const sumbit = document.querySelector(".sumbit")
const remaining = document.querySelector(".addremaining")
const userinput = document.querySelector(".userinput")
const validation = document.querySelector(".validation-check")
const guesses = document.querySelector(".pguesses")
const startOver=document.querySelector(".resultparas")
const p = document.createElement('p');



let playgame = true;
let numGuess = 1
if (playgame) {
    sumbit.addEventListener("click", (e) => {
        e.preventDefault()
        const guess = parseInt(userinput.value);
        console.log(guess)
        validateGuess(guess);
    }
    )

}

function validateGuess(guess) {
    if (guess <= 0 || guess >= 100 || isNaN(guess) || guess === "") {
        validation.innerHTML = "please enter valid number between 1 to 100"
    }
    else {
        validation.innerHTML = ""
        //if valid then 

        if (numGuess > 10) { 
            guesses.innerHTML += ` ${guess}`
            displayMessage(`Game Over. Random no was ${random}`)
            endgame() 
            
        }
        else{
            cleanup(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === random) {
        displayMessage('your guessed it right')
       endgame()
    }
    else if (guess > random) {
        displayMessage('your guess is too high')
    }
    else if (guess < random) {
        displayMessage('your guess is too low')
    }
}


function cleanup(guess){
    userinput.value = ''
    guesses.innerHTML += ` ${guess}`
    numGuess++;
    remaining.innerHTML = `${11- numGuess}`
}

function displayMessage(message) {
    document.querySelector(".highandlow").innerHTML = `<h3>${message}</h3>`
}
function endgame() {
    userinput.value = ''
    userinput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = '<h1 id="newgame" style="cursor: pointer;">Start new game</h1>'
    startOver.appendChild(p)
    playgame = false
    newgame()
}
function newgame() {
    const newgamebutton = document.querySelector("#newgame")
    newgamebutton.addEventListener('click', () => {
         index = Math.floor(Math.random() * arr.length)
         random = arr[index]
         remaining.innerHTML=''
         guesses.innerHTML=''
         document.querySelector(".highandlow").innerHTML=''
         userinput.removeAttribute('disabled')
         startOver.removeChild(p)
         playgame = true
    })
}

