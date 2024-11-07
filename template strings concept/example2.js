
function generateSentence(desc,arr){
    let text = ""
    for(let i=0; i < arr.length-1; i++){
        text += arr[i] + ","
    }
    text += arr[arr.length-1]

    //return "The " + arr.length + " " + desc + " " + "are" + " " + text
    return  `The ${arr.length} ${desc} are ${text}`
    }
console.log(generateSentence("best fruits",["Apple","Banana"]))