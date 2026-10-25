const fs = require('fs');
 
console.log('1. sync start');
 
setTimeout(() => {
  console.log('6. setTimeout (timers phase)');
}, 0);
 
setImmediate(() => {
  console.log('8. setImmediate (check phase)');
});
 
process.nextTick(() => {
  console.log('3. process.nextTick');
});
 
Promise.resolve().then(() => {
  console.log('4. promise microtask');
});
 
fs.readFile(__filename, () => {
  console.log('5. I/O callback (poll phase)');
 
  process.nextTick(() => {
    console.log('5.1 nextTick inside I/O');
  });
 
  Promise.resolve().then(() => {
    console.log('5.2 promise inside I/O');
  });
 
  setTimeout(() => {
    console.log('9. setTimeout inside I/O');
  }, 0);
 
  setImmediate(() => {
    console.log('7. setImmediate inside I/O');
  });
});
 
console.log('2. sync end');

/*
output

1. sync start
2. sync end
3. process.nextTick
4. promise microtask

6. setTimeout (timers phase)
8. setImmediate (check phase)

5. I/O callback (poll phase)
5.1 nextTick inside I/O
5.2 promise inside I/O

7. setImmediate inside I/O
9. setTimeout inside I/O

Actual O/p

1. sync start
2. sync end
3. process.nextTick
4. promise microtask

6. setTimeout (timers phase)
8. setImmediate (check phase)

5. I/O callback (poll phase)
5.1 nextTick inside I/O
5.2 promise inside I/O

7. setImmediate inside I/O
9. setTimeout inside I/O
*/