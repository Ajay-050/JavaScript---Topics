// let count = 0

// console.log(count)

// let myAge = 20
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// myDogAge++
// console.log(myDogAge)

let count = 0

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save(){
    let entries = count + " - "
    saveEl.textContent += entries
    countEl.innerText = 0
    count = 0
}