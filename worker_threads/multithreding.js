// 🧵 Multithreading in Node.js — Full Explanation
// ⚙️ What Is Multithreading?
// Multithreading is the ability of a CPU (or a program) to execute multiple threads concurrently — where a thread is the smallest unit of execution within a process.

// Node.js is single-threaded by design, relying on an event loop to handle I/O asynchronously — not in parallel.

// However, Node.js does support multithreading for CPU-heavy work using:

// worker_threads module (native since Node.js 10.5+)
// Child processes or cluster module (older or multi-process alternatives)

// 🧠 Why Do We Need Multithreading in Node.js?
// Node.js is great for I/O (files, databases, APIs), but struggles with:

// CPU-bound tasks, like:

// Image processing

// Video encoding

// Complex calculations

// Hashing/encryption

// Parsing large datasets (e.g., huge CSVs)

// These block the event loop, freezing all other operations — even simple requests.

// ✅ How to Use Multithreading in Node.js
// 🔧 1. worker_threads — Native Multithreading in Node.js


