// let counter = 0;

// function updateSecond (){
//     counter++;
//     console.log(counter);
//     setTimeout(updateSecond,1000);
// }
// function updateMinut (){
//     counter++;
//     console.log(counter);
//     setTimeout(updateMinut,updateSecond*60);
// }
// function updateHour (){
//     counter++;
//     console.log(counter);
//     setTimeout(updateHour,updateMinut*60);
// }

// console.log(`${updateHour()} : ${updateMinut()}: ${updateSecond()}`)

function clock(){

    const date = new Date()
    const hour = date.getHours().toString().padStart(2, '0')
    const minuts = date.getMinutes().toString().padStart(2, '0')
    const second = date.getSeconds().toString().padStart(2, '0')
    
    
    console.log(`24 Hours Formate => ${hour}: ${minuts}: ${second}`)

    setTimeout(clock,1000)
}

clock()