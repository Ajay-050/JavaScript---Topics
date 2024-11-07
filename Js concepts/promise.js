
let p =  new Promise((resolve,reject) => {
    let a = 1 + 1
    if(a == 2){
       resolve("fulfilled")
    }
    else{
        reject("failed")
    }
})

p.then((result) => {
    console.log("this is in then " + result)
}).catch((err) => {
    console.log("this is in the catch" + err)
});

// todo ...........................REFER NOTES...........................................