
const obj =  new Object();
// console.log(obj); 
// constructor: ƒ Object()
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf:ƒ isPrototypeOf()
// propertyIsEnumerable:ƒ propertyIsEnumerable()
// toLocaleString:ƒ toLocaleString()
// toString:ƒ toString()
// valueOf:ƒ valueOf()
// __defineGetter__:ƒ __defineGetter__()
// __defineSetter__:ƒ __defineSetter__()
// __lookupGetter__:ƒ __lookupGetter__()
// __lookupSetter__:ƒ __lookupSetter__()
// __proto__:(...)
// get __proto__:ƒ __proto__()
// set __proto__:ƒ __proto__()

const newObj = {
    name:"askahsy",
    age:57,
    getName:function(){
        console.log(this.name);
    },
    getroll:function(){
        return this.role;
    }
}

const secObj = {
    role:23,
    name:"raj",
    __proto__ : newObj
}

console.log(secObj.getroll());

const thirdObj = {
    class :"MCA",
    __proto__:secObj,
}

console.log(obj3.getName());