// * Suppose we want to know how many times we have clicked a button 
/*

?let count = 0
?listItems = ""
?document.getElementById("btn").addEventListener("click",function(){
?    listItems += " Button Clicked " + (++count) 
?document.getElementById("btn-clicked").textContent = listItems

*/


// * Now if we want to hide the count that means no other thing is using this varible then we can create a closure 

function attachEventListener(){
    let count = 0
    listItems = ""
    document.getElementById("btn").addEventListener("click",function(){
        listItems += " Button Clicked " + (++count) 
    document.getElementById("btn-clicked").textContent = listItems
})
}

attachEventListener()

// todo So whenever the function attachEventListener is called it remembers its lexical environment 
// todo and remembers the where the count is and thus incremented.
