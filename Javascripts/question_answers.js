// What is diffrence between var,const,let?

// const and let has a block scope , they can only access inside { } block.
// let can be assinged or change values but const keyword can not change or assigned new values once it assinged.
//but var keyword has function scope , outside the functional scope it can not be accessed

// function block_scope(){
//     if(true){
//         var a = 1;
//         let b= 2;
//         const c= 3;
//     console.log(b);
//     console.log(c);
//     }
//     console.log(a);
    
// }
// block_scope();


// --------------------------------
// What are the data types in javascripts ?
// 1.primitive and non-primitive

// Primitive datatypes are immutable which means it can not be modified.
// Non - Primitive are mutable , it can be modified.

// Primitive Data types has
// 1.Number
// 2.String
// 3.Boolean
// 4.Undefined
// 5.Null
// 6.Symbol
// 7.BigInt

// 1.Number can store integer , float , infinite and - infine
// Ex. let age = 25;
    // let price = 23.45
    //let infinite = Infinity

// undefined : variable has been declared but not assigned value yet.
// let r;
// on console it will return undefined

//Null : declared variable but not wanted to assign any value.
// let f = null;

// NON- PRIMITIVE DATA TYPES
// 1.Object : Key value pairs , can contain another object , function or data types
// 2.Array  : List like structure , used to store multiple values
// 3.Function : Block of reusuble code , in JS function treated as objects and can be assigned to variable , Can be passed an arguments.

// What is array and how to access array ?
// - we can create an array with array literal syntax [] or with array Constructor new Array();

//What is purpose of is NaN function ?
// NaN() check Is given number is not a number 

//What is purpose of map method in javascript ?
// The Map method is used to create a new array by applying a specified function to each element in an existing array.


//What is Event Bubbling and Event Capturing ?
// Event Bubbling : A propagation model where events are handled from the innermost element to the outermost element
//Event Capturing :  A Propogation model where events are handled from outmost element to inner most element.

// What are higher order function/
// - Higher Order function are function that can either take other function as arguments or return a function as a result.