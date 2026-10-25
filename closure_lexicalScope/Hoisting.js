// 3. Hoisting
// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope before code execution.

// Hoisting is a behavior where the JavaScript engine moves declarations (the creation of variables and functions) to the top of their scope before the code actually runs.

// Variables (var): Are hoisted and initialized with undefined.

// Functions: Function declarations are fully hoisted (you can call them before they are written).

// let and const: Are hoisted but not initialized. They sit in a "Temporal Dead Zone" (TDZ) until the code reaches their actual line.

//Functional Hoisting
// Functions are fully hoisted. This means you can call a function before it appears in your code.
sayHello(); // Output: "Hello there!"

function sayHello() {
  console.log("Hello there!");
}

//===============================================================================//

//Variable Hoisting

// This is where developers often get confused, because how a variable is hoisted depends on how you declared it (var, let, or const).
// The Old Way: var
// When you use var, the declaration is hoisted, but the value is left behind. It’s like the engine knows a box exists, but hasn’t put anything inside it yet.

console.log(myDog); // Output: undefined (not an error!)
var myDog = "Rex";
console.log(myDog); // Output: undefined (not an error!)

// The Modern Way: let and const
// These are technically hoisted, but JavaScript forbids you from touching them until the code reaches the line where they are defined. This "danger zone" is called the Temporal Dead Zone (TDZ).

console.log(myCat); // ReferenceError: Cannot access 'myCat' before initialization
//TDZ
let myCat = "Whiskers";

// Why does JavaScript do this?
// The main reason is how the JS engine works. It reads your code in two passes:

// Pass 1 (Creation Phase): It looks for all variables and functions and sets up their "neighborhoods" (Memory).

// Pass 2 (Execution Phase): It actually runs your code line-by-line.

