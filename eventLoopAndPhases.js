// 📌 What is the Event Loop?
// Node.js operates on a single-threaded event-driven architecture. While most JavaScript runs on one thread, 
// Node.js uses an event loop to delegate tasks to the system (like disk or network I/O), and it handles the results when they’re ready.

// 🌀 Phases of the Event Loop
// The event loop has multiple phases. Each phase has a queue of callbacks to execute. Here's an overview:

// Phase	Description
// 1. Timers	Executes setTimeout() and setInterval() callbacks.
// 2. Pending Callbacks	Executes some system operation callbacks (e.g., TCP errors).
// 3. Idle/Prepare	Internal use only.
// 4. Poll	Retrieves new I/O events; executes I/O-related callbacks.
// 5. Check	Executes setImmediate() callbacks.
// 6. Close Callbacks	Handles closed events (e.g., socket.on('close', ...)).
// Between each phase, microtasks (e.g., process.nextTick() and Promise.then()) are processed before the event loop continues to the 
// next phase.

// 1. Timers Phase (setTimeout, setInterval)
setTimeout(() => {
  console.log('Timeout callback');
}, 0);

//  Executes in the timers phase (after the delay has elapsed).

// 2. Pending Callbacks Phase
const fs = require('fs');

fs.readFile('file.txt', () => {
  // System-level I/O callback (non-blocking)
  console.log('File read callback');
});
// If the OS-level operation has a callback that needs to be deferred due to an error or specific condition, it might be executed here.

// 3.Poll Phase (I/O Callbacks)
// This is where most I/O callbacks (e.g., reading from file or network) are executed if ready.
  
const fs = require('fs');
fs.readFile(__filename, () => {
  console.log('Poll phase I/O callback');
});

//Happens in the poll phase if there are no timers or setImmediate scheduled.

// 4. Check Phase (setImmediate)

setImmediate(() => {
  console.log('setImmediate callback');
});
// Runs in the check phase, which happens after the poll phase.

// 5. Close Callbacks Phase
const net = require('net');
const server = net.createServer(socket => {});

server.listen(3000, () => {
  server.close(() => {
    console.log('Server closed callback');
  });
});
// server.close() will trigger a callback in the close callbacks phase.

// 6. Microtasks (process.nextTick, Promises)
// process.nextTick(): Runs after the current operation, before the event loop continues.
// Promise.then(): Runs at the end of the current microtask queue.

process.nextTick(() => {
  console.log('nextTick');
});

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('Sync log');

// | Type                 | Phase           | Priority (High to Low)    |
// | -------------------- | --------------- | ------------------------- |
// | `process.nextTick()` | Microtask queue | Highest (runs before I/O) |
// | `Promise.then()`     | Microtask queue | High                      |
// | `setTimeout()`       | Timers phase    | Medium                    |
// | `fs.readFile()`      | Poll phase      | Medium                    |
// | `setImmediate()`     | Check phase     | Lower (runs after I/O)    |
