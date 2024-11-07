
let player = {
    naam: "Gojo Satoru",
    chips: 2500
}

let cards = []
let isAlive = false

let firstCard = 0
let secondCard = 0

let sum = 0
let hasBlackjack = false

let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.naam + ": " + "$" + player.chips 

function startGame(){
    cards = []
    isAlive = true
    firstCard = getRandomcard()
    cards.push(firstCard)
    secondCard = getRandomcard()
    cards.push(secondCard)
    sum = firstCard + secondCard
    renderGame()
}

function getRandomcard(){
    let randomNumber = Math.floor(Math.random()*13) + 1;
    if(randomNumber == 1){
        return 11;
    }
    if(randomNumber > 10){
        return 10
    }
    return randomNumber
}

function renderGame()
{
    if(sum < 21)
    {
        message = "Do you want to draw a new card?"
    }
    else if(sum == 21)
    {
        message = "You've hit the blackjack!"
        hasBlackjack = true
    }
    else
    {
        message = "Bust! You are out of the game"
        isAlive = false
        
    }
    cardsEl.textContent = "Cards: "

    for(let count = 0; count < cards.length; count++)
    {
        cardsEl.textContent = cardsEl.textContent + cards[count] + " " 
    }

    sumEl.textContent = "Sum: " + sum
    messageEl.textContent = message
}

function newCard(){
    if(isAlive == true && hasBlackjack == false){
        let card = getRandomcard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
