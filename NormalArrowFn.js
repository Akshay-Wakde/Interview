
//1.Arguments objects are not available in arrow function.
//2.Regular functions created using function deaclaration or expression are 'construtable' and 'callable'
//3.Arrow function do not have `this` keyword.
//4.Implicaty retured by arrow function


const user = {
  name: 'John',
  greetRegular: function() {
    // console.log(`Hello, my name is ${this.name}.`); // `this` refers to `user`
  },
  greetArrow: () => {
    // console.log(`Hello, my name is ${this.name}.`); // `this` inherits from the global scope (undefined)
  }
};
user.greetRegular(); // Output: "Hello, my name is John."
user.greetArrow(); // Output: "Hello, my name is undefined." (or the global object's name if it exists)


//Normal function

// function add(x,y){
//     console.log(arguments);
//     return x+y; 
// }

//Arrow function

// const add = (x,y) =>{
//     // console.log(x);
//     return x+y; 
// }
// console.log(add(10,5));


////////////////////////////////////////////////////////////////////////////////////////////////////////



// const usersData = {
//     username : "Akshay",
//     price:"799",
//     writeName : function(){
//         console.log(`${this.username}`);
//     }

// }

// usersData.writeName();
// usersData.username = "Raj";
// usersData.writeName();

//Normal fuction
function chai(){
    let username = "Aksah";
    console.log(this.username);
    //Output : undefined (This works on objects)
}

chai();
//Normal fuction
const chai1 = function (){
      let username = "Aksah";
    console.log(this.username);
    //Output : undefined (This works on objects)
}

chai1();

//Arrow Funtion

const chai2 =  () => {
    let username = "Aksah";
    console.log(this.username);
    //Output : undefined (This works on objects and normal function)
}

chai2();

