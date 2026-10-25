setTimeout( () => console.log("Timer 1"), 0);
setTimeout( () =>{
    console.log("Timer 2");
    process.nextTick(()=> console.log("This is process next under timer 2"));

}, 0);
setTimeout( () => console.log("Timer 3"), 0);


process.nextTick(()=> console.log("This is process next 1"));

process.nextTick(()=>{
    console.log("This is process next 2");
    process.nextTick(()=>{
        console.log("This is process next 2.1");
    });
});
process.nextTick(()=> console.log("This is process next 3"));

Promise.resolve().then(() => {
    console.log("Promise 1");
});

Promise.resolve().then(() => {
  console.log("Promise 2");
    process.nextTick(()=> console.log("This is promise process next 3.1"));

});

Promise.resolve().then(() => {
    console.log("Promise 4");
});

// // This is process next 1
// // This is process next 2
// // This is process next 3
// // This is process next 2.1
// // Promise 1
// // Promise 2
// // Promise 4
// // This is promise process next 3.1
// // Timer 1
// // Timer 2
// // This is process next under timer 2
// // Timer 3

// setTimeout(()=>{
//     console.log("Timer 1");
// },1000);

// setTimeout(()=>{
//     console.log("Timer 2");
// },500);

// setTimeout(()=>{
//     console.log("Timer 3");
// },0);

// // Timer 3
// // Timer 2
// // Timer 1