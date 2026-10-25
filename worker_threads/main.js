const { Worker } = require('worker_threads');
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/resize') {
    const worker = new Worker('./image_worker.js');
    
    // Get image data (simulated)
    const imageData = fs.readFileSync(path.join(__dirname, 'large_image.jpg'));
    
    console.log('Main thread: Offloading image resizing task...');
    
    worker.on('message', (resizedImage) => {
      console.log('Main thread: Image resizing complete.');
      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
      res.end(Buffer.from(resizedImage));
      worker.terminate();
    });
    
    worker.postMessage(imageData, [imageData.buffer]); // Transfer the buffer to avoid copying
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from the main thread!');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
// Main thread: Offloading image resizing task...
// Worker thread: Starting image resizing...
// Main thread: Image resizing complete.
// Worker thread: Resizing complete.

});