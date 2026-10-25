// A simple function that returns a Promise.
// It will either resolve or reject after a specified time.
const createPromise = (name, shouldSucceed, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldSucceed) {
                console.log(`Promise '${name}' resolved successfully.`);
                resolve(`Value from '${name}'`);
            } else {
                console.log(`Promise '${name}' rejected.`);
                reject(`Error from '${name}'`);
            }
        }, delay);
    });
};

// ====================================================================
//                 Example 1: Promise.all with all successes
// ====================================================================

console.log("--- Starting Example 1: Promise.all with all successes ---");
const promisesAllSuccess = [
    createPromise("Promise A", true, 1000), // Succeeds after 1s
    createPromise("Promise B", true, 2000), // Succeeds after 2s
    createPromise("Promise C", true, 500)   // Succeeds after 0.5s
];

// Promise.all waits for all promises to resolve.
// The result is an array of the resolved values, in the same order.
Promise.all(promisesAllSuccess)
    .then(results => {
        console.log("Promise.all (Success) finished.");
        console.log("Results:", results); // Expected: ["Value from 'Promise A'", "Value from 'Promise B'", "Value from 'Promise C'"]
    })
    .catch(error => {
        console.log("This block will not be executed.");
    });


// ====================================================================
//                 Example 2: Promise.all with a rejection
// ====================================================================
// Note: This will fail fast.
console.log("\n--- Starting Example 2: Promise.all with a rejection ---");
const promisesAllFailure = [
    createPromise("Promise D", true, 1000),  // Succeeds after 1s
    createPromise("Promise E", false, 500),  // Rejects after 0.5s (FASTEST)
    createPromise("Promise F", true, 2000)   // Succeeds after 2s
];

// Promise.all will reject as soon as the first promise rejects.
// The 'catch' block will be triggered with the reason of the first rejected promise.
// Promises D and F will continue to run in the background, but the .then block is skipped.
Promise.all(promisesAllFailure)
    .then(results => {
        console.log("This block will not be executed.");
    })
    .catch(error => {
        console.log("Promise.all (Failure) finished.");
        console.log("Error caught:", error); // Expected: "Error from 'Promise E'"
    });


// ====================================================================
//                 Example 3: Promise.allSettled with mixed results
// ====================================================================
// Note: This will wait for ALL promises to settle, regardless of outcome.
console.log("\n--- Starting Example 3: Promise.allSettled ---");
const promisesAllSettled = [
    createPromise("Promise G", true, 1000),  // Succeeds after 1s
    createPromise("Promise H", false, 500),  // Rejects after 0.5s
    createPromise("Promise I", true, 2000)   // Succeeds after 2s
];

// Promise.allSettled waits for all promises to either resolve or reject.
// The result is an array of objects, each describing the outcome of a promise.
Promise.allSettled(promisesAllSettled)
    .then(results => {
        console.log("Promise.allSettled finished.");
        console.log("Results:", results);
        
        // The output is an array of objects.
        // Each object has a 'status' ('fulfilled' or 'rejected') and
        // a 'value' (for fulfilled promises) or 'reason' (for rejected promises).
        results.forEach(result => {
            if (result.status === 'fulfilled') {
                console.log(`- Status: Fulfilled, Value: ${result.value}`);
            } else {
                console.log(`- Status: Rejected, Reason: ${result.reason}`);
            }
        });
    });

// An extra delay to ensure the console output for all examples is grouped correctly
// and doesn't mix up.
setTimeout(() => {
    console.log("\nAll examples have completed.");
}, 3000);
