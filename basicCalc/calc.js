
let num1 = 7
let num2 = 3

let num1El = document.getElementById("num1-el")
let num2El = document.getElementById("num2-el")

num1El.textContent = num1
num2El.textContent = num2

let sumEl = document.getElementById("sum")

let result = 0

function Addition(){
    result = num1 + num2
    sumEl.textContent = result
}

function Subtraction(){
    result = num1 - num2
    sumEl.textContent = result
}

function Multiplication(){
    result = num1 * num2
    sumEl.textContent = result
}

function Division(){
    result = num1/num2
    sumEl.textContent = result
}