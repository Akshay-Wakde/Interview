const fs = require('fs');

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

setImmediate(()=>{
    console.log("setImmediate 1");

});
// This is process next 1
// Promise 1
// Timer 1
// setImmediate 1
// readFile 1

//IO events are polled and callback functions are added to the IO queue only after the IO is complete.