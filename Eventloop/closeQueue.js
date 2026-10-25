const fs = require('fs');

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close",()=>{
    console.log("this is from readalbestream close event callback");
});

setImmediate(() => console.log("this is setImmedidate 1"));
setTimeout(()=> console.log("setTimeout 1"));
Promise.resolve().then(() => console.log("promise 1"));
process.nextTick(()=>console.log("process nexttck"));

//the readstream has added close event emmitter and that will add it into the close queue.