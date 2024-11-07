

const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved")
    },5000)
})

async function getData(){
    const val = await p
    console.log("Namaste Js")
    console.log(val)
}

getData()

//* Whenever Js encounters await it waits till promise is resolved and that's the reason both "Namaste Js" and "Promise Resolved" is
//* consoled out same time after 5 secs

//* wait in the above context is that the function getData is suspended (remved from callstack) whenver Js encounters await
//* and Starts timer.
//* Meanwhile Js executes rest of the code and after the time's up that function getData is put back to callStack for execution.

// todo ...........................REFER NOTES...........................................