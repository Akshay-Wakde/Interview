// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// States of a Promise:

// Pending: The initial state; the promise is neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed, and an error was thrown.

// How it works:
// A Promise is created using the Promise constructor, and you provide two functions: resolve 
// (when the operation succeeds) and reject (when the operation fails).


// const myPromise = new Promise((resolve, reject) => {
//   const success = true;
//   if (success) {
//     resolve("Operation successful!");
//   } else {
//     reject("Operation failed!");
//   }
// });

// myPromise
//   .then((result) => {
//     console.log(result);  // "Operation successful!"
//   })
//   .catch((error) => {
//     console.log(error);  // "Operation failed!"
//   });


//  async/await
// async/await is a syntax sugar built on top of Promises that makes asynchronous code look and behave more like synchronous code. 
// It was introduced in ES8 (ES2017).

// async function: A function marked with async always returns a Promise, even if it returns a value directly.
// await expression: Used inside async functions to pause execution until the Promise resolves, making asynchronous code appear synchronous.
// Example:

// An async function

// async function fetchData() {
//   try {
//     const data = await myPromise;  // Waits for the promise to resolve
//     console.log(data);  // "Operation successful!"
//   } catch (error) {
//     console.error(error);  // Handle any errors
//   }
// }

// fetchData();

// await only works inside async functions.

// It pauses execution until the promise is resolved or rejected, and then returns the resolved value (or throws an error if rejected).

// When to Use Which?
// Use Promise:

// When you need to handle multiple asynchronous tasks in parallel or sequentially using .then() and .catch().

// For complex async chains where you might need to handle multiple success/failure cases.

// Use async/await:

// When you want to simplify code that deals with asynchronous operations.

// When you need cleaner, more readable, and synchronous-looking code for asynchronous flows.

// Especially useful for handling asynchronous code inside functions or loops.




const newPromise = new Promise( (resolve,reject) =>{
    const success = true;

    if(success){
        resolve("Success");
    }else{
        reject("Failure");
    }

})

newPromise
        .then((data)=>{
            console.log(data);
        })
        .catch((error)=>{
            console.log(error);
        });
