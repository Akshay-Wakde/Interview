// 🔄 What is a Stream?
// A stream is an abstract interface for working with streaming data. They are event-based and come in four main types:
// | Type          | Description                                          |
// | ------------- | ---------------------------------------------------- |
// | **Readable**  | Can be read from (e.g., file input)                  |
// | **Writable**  | Can be written to (e.g., file output)                |
// | **Duplex**    | Both readable and writable (e.g., TCP sockets)       |
// | **Transform** | Duplex stream that modifies data (e.g., compression) |


// ✅ Stream Events
// All streams are instances of EventEmitter and emit events like:

// data: when data is available
// end: when no more data
// error: on errors
// finish: when writing is done

// 📘 Example 1: Reading a File Using a Readable Stream
const fs = require('fs');

const readableStream = fs.createReadStream('bigfile.txt', {
  encoding: 'utf8',
  highWaterMark: 1024 // Read in 1KB chunks
});

readableStream.on('data', chunk => {
  console.log('New chunk:', chunk.length, 'bytes');
});

readableStream.on('end', () => {
  console.log('Finished reading file.');
});


// 📘 Example 2: Piping a File from Readable to Writable Stream

const fs = require('fs');
const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);
// This uses .pipe() to connect streams, copying data from one to another efficiently.



// 📘 Example 3: Creating a Transform Stream (Uppercase Conversion)

const { Transform } = require('stream');

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const upperChunk = chunk.toString().toUpperCase();
    callback(null, upperChunk);
  }
});

process.stdin.pipe(upperCaseTransform).pipe(process.stdout);


// 🔁 Summary of Stream Types with Examples

// | Stream Type | Example Use Case                      | Method                 |
// | ----------- | ------------------------------------- | ---------------------- |
// | Readable    | Reading from a file or HTTP request   | `fs.createReadStream`  |
// | Writable    | Writing to a file                     | `fs.createWriteStream` |
// | Duplex      | TCP Sockets                           | `net.Socket`           |
// | Transform   | Data modification (e.g., compression) | `zlib.createGzip()`    |


// Bonus: Stream in JavaScript (Browser Fetch Stream)
// In modern JavaScript (browser), you can use ReadableStream for streamed HTTP responses:

fetch('/largefile.txt')
  .then(res => {
    const reader = res.body.getReader();
    return reader.read().then(function process({ done, value }) {
      if (done) {
        console.log('Stream complete');
        return;
      }
      console.log('Chunk received:', value.length);
      return reader.read().then(process);
    });
  });
// ✅ This fetches a large file and processes it chunk by chunk in the browser.