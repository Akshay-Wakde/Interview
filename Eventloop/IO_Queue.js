const fs = require('fs');

// fs.readFile(__filename, () =>{
//     console.log("readFile 1");
    
// });    

// process.nextTick(()=> console.log("This is process next 1"));

// Promise.resolve().then(() => {
//     console.log("Promise 1");
// });

// // This is process next 1
// // Promise 1
// // readFile 1



// setTimeout(()=>{
//     console.log("Timer 1");
// },0);


// fs.readFile(__filename, () =>{
//     console.log("readFile 1");
    
// });  

// // Timer 1
// // readFile 1


//Ex.3

fs.readFile(__filename, () =>{
    console.log("readFile 1");
});   
process.nextTick(()=> console.log("This is process next 1"));
Promise.resolve().then(() => {
    console.log("Promise 1");
});
setTimeout(()=>{
    console.log("Timer 1");
},0);
// This is process next 1
// Promise 1
// Timer 1
// readFile 1