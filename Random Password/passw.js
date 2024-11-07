
const passwordBox = document.getElementById("password")
const length = 12

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*~+_()<>[]{}=/-"

const allChars = upperCase+lowerCase+numbers+symbols

function createPassword(){
    let passw = ""
    passw += upperCase[Math.floor(Math.random()*upperCase.length)]
    passw +=  lowerCase[Math.floor(Math.random()*lowerCase.length)]
    passw +=  numbers[Math.floor(Math.random()*numbers.length)]
    passw +=  symbols[Math.floor(Math.random()*symbols.length)]

    while(length > passw.length){
        passw +=  allChars[Math.floor(Math.random()*allChars.length)]
    }
    passwordBox.value = passw
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy")
}