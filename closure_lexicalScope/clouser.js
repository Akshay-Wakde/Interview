// What is a Closure in JavaScript?
// A closure in JavaScript is a feature where an inner function has access to the outer (enclosing) function's variables, even after the outer function has returned.

// A closure can access:

// Its own scope (variables defined within it)

// The scope of the outer function

// The global scope

// 🔍 Why Closures Are Useful
// Closures allow for:

// Data encapsulation (private variables)

// Function factories

// Maintaining state between function calls



function outerFunction() {
  let outerVariable = "I'm from the outer function";

  function innerFunction() {
    console.log(outerVariable); // innerFunction has access to outerVariable
  }

  return innerFunction;
}

const myClosure = outerFunction(); // outerFunction is called and returns innerFunction
myClosure(); // Output: "I'm from the outer function"


// ex2
function createCounter(){
    let count =0;

    return {
        increment:function(){
            count++;
            console.log(count);
        },
        decrement:function(){
            count--;
            console.log(count);
        }
    }
}
const counter = createCounter();
counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.decrement(); // Output: 1

// 🧠 What's happening?
// The variable count is private to the createCounter function.
// It's accessible only through the returned object's methods (increment and decrement) via closure. 
// No outside code can directly modify count.

