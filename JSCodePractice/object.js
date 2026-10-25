const { title, connected } = require("process");

// const fnc = (function (a){
//     delete a;
//     return a;
// })(5);

// console.log(fnc);
// //5

const user = {
    age:30,
    name:"aksd",
    "like this that" : "yes",
}

console.log(user["like this that"]);
console.log("///////////////////////");

for(key in user){
    console.log(key);
}
console.log("///////////////////////");

for(key in user){
    console.log(user[key]);
}

console.log("///////////////////////");

const obj  = {
    a: "one",
    b: "two",
    a :" three",
};

console.log(obj)
// { a: ' three', b: 'two' }
console.log("///////////////////////");

let nums = {
    a:100,
    b:200,
    title:"my nums",
};

multipyByTwo(nums);

function multipyByTwo(obj){
    for(key in obj){
        if(typeof obj[key] === "number"){
            obj[key] = obj[key] * 2;
        }
    }
}
console.log(nums);

console.log("///////////////////////");

const a = {};
const b = { key : "b" };
const c = { key : "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
//456 as b is trying to set as a key but its not possible until its object.


console.log("///////////////////////");

//Question. What is JSON.parse and JSON.stringify ?
const userDetails = {
    name:"Ak",
    age:29,
}

console.log("///////////////////////");
console.log([..."Lydia"]);
//... this are spread operator which can use for spread the property or an array
// [ 'L', 'y', 'd', 'i', 'a' ]

console.log("///////////////////////");

const user1 = { name:"Lydia" , age:21};
const admin = { admin:true,...user1};
console.log(JSON.stringify(admin));
//{ admin: true, name: 'Lydia', age: 21 }
//with stringify {"admin":true,"name":"Lydia","age":21}
console.log("///////////////////////");


const setting = { 
    username:"piyush",
    level:19,
    health:90,
}

const data = JSON.stringify(setting,["level","health"]);
console.log(data);
//{"level":19,"health":90}
console.log("///////////////////////");
const shape = {
    radius : 10,
    diameter () {
        return this.radius * 2; 
    },
    perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter()); //20
console.log(shape.perimeter()); //NaN
console.log("///////////////////////");
// Q. 9 What is destructing in objects
 let user2 = {
    name:"piyush",
    age:24,
    fullname : {
        name:"Akshay",
        last:"Wa",
    }
 }

 const { fullname : { name} } = user2;

 console.log(name);
 //Akshay

console.log("///////////////////////");
function getItems(Fruits,ar,...FavFruit){
    return[...ar,...Fruits,...FavFruit];
}
console.log(getItems(["Banana","Apple"],["Peach"],"Orange"));
console.log("///////////////////////");

// Q. Object Referencing
let vc = { greeting : "day"};
let d ;
d = vc;

vc.greeting = "hellow";
console.log(d.greeting); // Hellow
//We are proving reference not the complete object;
console.log("///////////////////////");

console.log({ a: 1 } == {a : 1});
// console.log({ a: 1 } === {a : 1});
//This condition will always return 'false' since JavaScript compares objects by reference, not value.ts(2839)
console.log("///////////////////////");

let person = { name : "Lydia" };
const members = [person];
person = null;

console.log(members); //name:"Lydia" like members[0]
console.log("///////////////////////");
const value = { number : 10 };

const multiplyQ = (x = { ...value}) =>{
    console.log((x.number *= 2));
};

multiplyQ();
multiplyQ();
multiplyQ(value);
multiplyQ(value);
// 🧠 Summary of why:
// Call	Argument Passed	x.number start	Output	value.number after call
// 1	default { ...value }	10	20	10
// 2	default { ...value }	10	20	10
// 3	same object value	10	20	20
// 4	same object value	20	40	40
console.log("///////////////////////");

function changeAgeAndRef(person){
    person.age = 25;
    person.name = "Alexxa";
    person = {
        name : "Jhon",
        age: 50,
    }
    person.age = 60;
    
    return person;
}

const perObj = {
    name : "Alex",
    age : 40,
}

const perObj2 = changeAgeAndRef(perObj);

console.log(perObj);
console.log(perObj2);
// { name: 'Alexxa', age: 25 }
// { name: 'Jhon', age: 60 }
console.log("///////////////////////");
// Q. What is shallow copy and deep copy in a Object
// Q. how to deep copy or clone an object ?


