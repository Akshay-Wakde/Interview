// console.log("console.log1");
// process.nextTick(()=> console.log("This is process next 1"));
// console.log("console.log2");


// Promise.resolve().then( () =>{
//     console.log("Promise 1")
// });
// process.nextTick(()=> console.log("This is process next 1"));


// Ex3
// console.log("Start");
// process.nextTick(() => {
//     console.log("process.nextTick 1");
// });
// Promise.resolve().then(() => {
//     console.log("Promise 1");
// });
// console.log("End");

// // Start
// // End
// // process.nextTick 1
// // Promise 1


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

// This is process next 1
// This is process next 2
// This is process next 3
// This is process next 2.1
// Promise 1
// Promise 2
// Promise 4
// This is promise process next 3.1