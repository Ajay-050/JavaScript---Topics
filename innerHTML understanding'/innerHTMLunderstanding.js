
let buyBtn = document.getElementById("container")
let textEl = document.getElementById("text")

buyBtn.innerHTML = "<button>" +"BUY" + "</button>"

buyBtn.addEventListener("click",function(){
    // textEl.textContent = "Thanks for Buying!"
    buyBtn.innerHTML += "<p>Thanks for Buying!</p>"
})