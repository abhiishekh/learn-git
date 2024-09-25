const fs = require('fs');

function print(err,data){
  console.log(data)
}

let data = "\nThis is something new"
// fs.readFile('b.txt','utf-8',print);
fs.appendFile('b.txt',data,(err)=>{
  if(err){
    console.log("error occured")
  }
})

fs.readFile('b.txt','utf-8',print)
// fs.readFile('b.txt','utf-8',print)


// let counter = 0;

// function counter1(){
//   counter++;
//   console.log(counter)
//   setTimeout(counter1,1000)
// }

// counter1()