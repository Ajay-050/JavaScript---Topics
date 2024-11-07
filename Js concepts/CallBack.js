// ? CALLBACK IN JS
// This callback makes Js ASYNCHRONOUS (Do not block the execution of program, allowing other tasks to proceed)

setTimeout(() => {
    console.log("timer")
},5000)

// * setTimeout, we have passed a function which will call later after 5 secs. Meanwhile JS executes the rest of the code.
// * similarly addEventListener when you start an Event a callback function is called.

function x(y){
    console.log("x")
    y()
}
x(function y(){
    console.log("y")
})

// todo First "x" is printed which will later call a y() function (also a callback) and prints "y" after 5 secs "timer" is printed.

// todo ...........................REFER NOTES...........................................