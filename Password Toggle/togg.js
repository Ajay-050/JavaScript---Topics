
let passowrd = document.getElementById("pass")
let eyeIcon = document.getElementById("icon")

eyeIcon.onclick = ()=>{
    if(passowrd.type == "password"){
        passowrd.type = "text"
        eyeIcon.src = "eye-open.png"
    }
    else{
        passowrd.type = "password"
        eyeIcon.src = "eye-close.png"
    }
}