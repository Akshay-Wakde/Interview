// What are Streams in Node.js?
// Streams in Node.js are abstract interfaces for working with streaming data. They provide a way to handle data piece by piece (or "chunks") rather than all at once, making them incredibly powerful for:

// Memory Efficiency: Processing large files or network data without loading everything into memory. Imagine reading a 10GB log file – without streams, your application would crash trying to load it all.

// Time Efficiency: Data can be processed as it arrives, rather than waiting for the entire resource to be available. This can reduce latency.

// Composability: Streams can be "piped" together, creating a chain of operations where the output of one stream becomes the input of another. This is very powerful for building data processing pipelines.

// Types of Streams in Node.js:
// Node.js has four fundamental types of streams:

// Readable Streams: Abstract a source from which data can be read.

// Examples: fs.createReadStream, http.IncomingMessage (from an HTTP request), process.stdin.

// Writable Streams: Abstract a destination to which data can be written.

// Examples: fs.createWriteStream, http.ServerResponse (for an HTTP response), process.stdout.

// Duplex Streams: Both Readable and Writable. They can be read from and written to.

// Examples: net.Socket (TCP sockets), zlib.createBrotliCompress (compression stream).

// Transform Streams: A type of Duplex stream where the output is computed based on the input. They transform data as it passes through.

// Examples: zlib.createGzip (gzip compression), crypto.createCipher (encryption)


// Core Concepts:
// Events: Streams are EventEmitters and emit events like data, end, error, drain, finish.

// Piping: The pipe() method is the easiest way to connect streams. It automatically handles backpressure.

// Backpressure: A mechanism that prevents a fast readable stream from overwhelming a slower writable stream by temporarily pausing the readable stream when the writable stream's internal buffer is full