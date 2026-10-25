// // | Data Type     | Description                                        | Example                           |
// // | ------------- | -------------------------------------------------- | --------------------------------- |
// // | **String**    | Sequence of characters                             | `'hello'`                         |
// // | **Number**    | Integer or floating-point number                   | `42`, `3.14`                      |
// // | **BigInt**    | Arbitrarily large integer                          | `123456789012345678901234567890n` |
// // | **Boolean**   | Represents logical values: `true` or `false`       | `true`, `false`                   |
// // | **Undefined** | Variable declared but not initialized              | `let x;`                          |
// // | **Null**      | Represents no value or absence of object           | `null`                            |
// // | **Symbol**    | Unique, immutable value used for object properties | `Symbol('description')`           |
// // | **Object**    | A collection of key-value pairs                    | `{ name: 'Alice', age: 30 }`      |
// // | **Array**     | Ordered collection of values                       | `[1, 2, 3]`                       |
// // | **Function**  | A callable block of code                           | `function() {}`                   |
// // | **Date**      | Represents date and time                           | `new Date()`                      |
// // | **RegExp**    | Regular expressions for pattern matching           | `/abc/`                           |
// // | **Error**     | Error object for handling errors                   | `new Error('Oops!')`              |

// In Node.js (and JavaScript in general), data types are categorized into primitive types and objects.

// Primitive Data Types
// These are simple values that are immutable (cannot be changed after creation). There are 7 primitive data types in JavaScript (and thus Node.js):

// String

// A sequence of characters enclosed in single, double, or backticks (for template literals).

// Example:

// const name = 'Alice';
// const greeting = "Hello, World!";
// const template = `My name is ${name}`;
// Number

// Represents both integer and floating-point numbers. In JavaScript, there's only one numeric type (unlike languages with separate types for integers and floats).

// Example:


// const age = 25;      // Integer
// const temperature = 36.6;  // Float
// BigInt

// For representing integers with arbitrary precision (larger than Number can handle).

// Example:

// const bigNumber = 1234567890123456789012345678901234567890n;
// Boolean

// Represents a logical value: true or false.

// Example:

// const isActive = true;
// const isCompleted = false;
// Undefined

// Represents a variable that has been declared but not assigned a value.

// Example:

// let x;
// console.log(x); // undefined
// Null

// Represents the intentional absence of any object value. It's used when you want to explicitly indicate "no value".

// Example:


// let person = null; // No object assigned to person
// Symbol

// A unique and immutable primitive value used to create object properties.

// Example:

// const uniqueId = Symbol('id');
// const obj = {
//   [uniqueId]: 'value'
// };
// Object Data Types
// Objects are more complex data structures, and their types are non-primitive (mutable). Here are the main object types in JavaScript:

// Object

// A collection of key-value pairs. It can hold any data type (including functions).

// Example:

// const person = {
//   name: 'Alice',
//   age: 30,
//   greet: function() { console.log('Hello'); }
// };
// Array

// A special type of object used for storing ordered collections of values.

// Example:

// const numbers = [1, 2, 3, 4, 5];
// const names = ['Alice', 'Bob', 'Charlie'];
// Function

// A block of reusable code that can be called to perform a task.

// Functions are first-class objects in JavaScript, meaning they can be assigned to variables, passed as arguments, and returned from other functions.

// Example:

// const add = function(a, b) {
//   return a + b;
// };
// console.log(add(2, 3));  // 5
// Date

// Used for representing dates and times.

// Example:

// const today = new Date();
// console.log(today);  // Current date and time
// RegExp (Regular Expression)

// A way of describing patterns in strings, used for pattern matching, searching, and replacing.

// Example:

// const regex = /ab+c/;
// console.log(regex.test('abc'));  // true
// Error

// A built-in object for handling errors. It provides methods for capturing and managing errors.

// Example:

// const error = new Error('Something went wrong!');
// console.log(error.message);  // Something went wrong!
// Type Conversion in Node.js
// You can also convert data types in JavaScript using various methods:

// String Conversion:


// let num = 123;
// let str = num.toString();  // '123'
// Number Conversion:


// let str = "42";
// let num = Number(str);  // 42
// Boolean Conversion:


// let value = 1;
// let boolValue = Boolean(value);  // true
// Data Type Checking in Node.js
// You can check data types using:

// typeof (for primitive types and functions):

// console.log(typeof 'Hello');     // "string"
// console.log(typeof 42);          // "number"
// console.log(typeof true);        // "boolean"
// console.log(typeof undefined);   // "undefined"
// console.log(typeof null);        // "object" (This is a known JavaScript quirk)
// console.log(typeof function(){}); // "function"
// Array.isArray() (for arrays):


// console.log(Array.isArray([1, 2, 3]));  // true
// console.log(Array.isArray('Hello'));    // false
// instanceof (for objects and other complex types):

// let date = new Date();
// console.log(date instanceof Date);  // true