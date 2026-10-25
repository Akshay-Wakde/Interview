// The Modern Way: let and const
// These are technically hoisted, but JavaScript forbids you from touching them until the code reaches the line where they are defined. This "danger zone" is called the Temporal Dead Zone (TDZ).

console.log(myCat); // ReferenceError: Cannot access 'myCat' before initialization


let myCat = "Whiskers";

// Why does JavaScript do this?
// The main reason is how the JS engine works. It reads your code in two passes:

// Pass 1 (Creation Phase): It looks for all variables and functions and sets up their "neighborhoods" (Memory).

//Pass 2 (Execution Phase): It actually runs your code line-by-line.