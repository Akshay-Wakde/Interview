const fs = require('fs');

// fs.readFile(__filename, () =>{
//     console.log("readFile 1");
    
// setImmediate(()=>{
//     console.log("setImmediate 1 inner readfile");

// });
// });   
// process.nextTick(()=> console.log("This is process next 1"));
// Promise.resolve().then(() => {
//     console.log("Promise 1");
// });
// setTimeout(()=>{
//     console.log("Timer 1");
// },0);

// // This is process next 1
// // Promise 1
// // Timer 1
// // readFile 1
// // setImmediate 1 inner readfile


// //Check queue callbacks are executed after microtask queues callbacks , timer queue callbacks and IO queue callbacks are executed.


//ex.2
fs.readFile(__filename, () =>{
        console.log("readFile 1");
    setImmediate(()=>console.log("setImmediate 1 inner readfile"));
    process.nextTick(()=> console.log("This is inner process next 1"));
    Promise.resolve().then(() => console.log(" this is inner promise 1"));
});   
process.nextTick(()=> console.log("This is process next 1"));
Promise.resolve().then(() => {
    console.log("Promise 1");
});
setTimeout(()=>{
    console.log("Timer 1");
},0);

//This is process next 1
// Promise 1
// Timer 1
// readFile 1
// This is inner process next 1
//  this is inner promise 1
// setImmediate 1 inner readfile

//Microtask queues callbacks are executed after IO callbacks and before check queue callbacks.