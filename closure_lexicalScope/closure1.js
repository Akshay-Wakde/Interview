function outerFunction(){
    let outVar = "Outer Variable";

   return function innerFunction(){
        console.log(outVar);
    };  
}

const getData = outerFunction();
getData();



// 2. Closure
// A Closure is created when a function is defined inside another function and "remembers" the variables from its parent scope, even after the parent function has finished executing.

// Think of it as a function carrying a "backpack" of all the variables that were in its environment when it was born.

function createCounter() {
  let count = 0; // This is the "parent" variable

  return function() { 
    // This inner function creates a closure
    count++; 
    return count;
  };
}

const myCounter = createCounter(); 

console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3
