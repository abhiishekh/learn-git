// A promise is a function that is called from the future 

// const { resolve } = require("path");

// function print (){
//     console.log("a msg is printed ")

// }

// setTimeout(print,1000);
// console.log('before the msg print ')


// function promiseCallback(resolve){
//     setTimeout(resolve,3000)
// }


// This is the call back function 


// function main(){
//     console.log("hii")
// }
// // promiseCallback(main)

// // setTimeout(main,3000);



// // This is the promise version of the settimeout

// function waitfor3second(resolve){ // the function to wait for the 3 seconds using setTimeout
//     setTimeout(resolve,3000);
// }

// function setTimeOutPromisified(){  // The function to create a Promise instanse 
//     return new Promise(waitfor3second)
// }

// setTimeOutPromisified().then(main) // this is the way to call the promise 

// // here we first call the promise function and after that we call the working function using .then keyboard
// function main(){
//     console.log("printed")
// }

// function random(main){
//     setTimeout(main,3000)
// }

// let p = new Promise(random)
// function callback(){
//     console.log("promise succeded")
// }

// p.then(callback)


// creating a promisified version of setTimeou

// function setTimeOutPromisified(time){
//     return new Promise(resolve =>{
//         setTimeout(resolve,time)
//     })
// }

// function callback(){
//     console.log("1seconds after this msg will printed")
// }

// setTimeOutPromisified(1000).then(callback)

function main(){
    console.log("printed the main function")
}

function resolve(){
    setTimeout(main,3000)
}

function setTimeOutPromisified(){
    return new Promise(resolve).then(main)
}
setTimeOutPromisified()