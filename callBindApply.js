// const name1 = {
//     firstname:"Arjun",
//     last:"Rampal"
// }

// const myName = function (country,pincode) {

// console.log(this.firstname + " " + this.last + " " + country + " " + pincode )
// }


// const name2 = {
//     firstname:"akshay",
//     last:"wakde"
// }
// //function borrowing
// myName.call(name1,'India','441214');
// myName.call(name1,"Russia" , "5455545");

// myName.apply(name1,['India','441214']);


// //////////////////////////////////////////////////////////////////////////////////////

// // // Define an object
// // const person = {
// //   name: "Alice",
// // };

// // // Define a function that uses 'this'
// // function greet(greeting, punctuation) {
// //   console.log(`${greeting}, my name is ${this.name}${punctuation}`);
// // }

// // // ----------- CALL -----------
// // greet.call(person, "Hello", "!"); // Hello, my name is Alice!

// // // ----------- APPLY -----------
// // greet.apply(person, ["Hi", "."]); // Hi, my name is Alice.

// // // ----------- BIND -----------
// // const boundGreet = greet.bind(person, "Hey", "!!");
// // boundGreet(); // Hey, my name is Alice!!



// const name3 = {
//   firstname:"Arjunn",
//   lastname:"Rampalli",
// }

// const functionVar = function (pincode,Area){
//   console.log(this.lastname,pincode,Area)
// }

// functionVar.call(name3,'4412224',"Nagar");
// functionVar.apply(name3,["442101","Ramnagar"]);
// const BindFunc = functionVar.bind(name3,"441221","Indiara nagar")
// BindFunc();






const userData = {
  name:"arjun",
  age : 21,
}

const showUserData = function (city) {
  console.log(this.name, city);
}


showUserData.call(userData , " Mumbai");
showUserData.apply(userData , [" Chennai"]);
const data = showUserData.bind(userData,"Pune");
data();
