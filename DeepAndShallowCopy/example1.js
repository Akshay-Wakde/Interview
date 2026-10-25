let obj1 = {
    name : "Akshay",
    address : { city : "Pune"},
    getName : function () {
        return this.name;
    }
}

// let shallowCopy = Object.assign({},obj1);
// console.log(shallowCopy);

let shallowCopy1 = { ...obj1 };
// console.log(shallowCopy1);


shallowCopy1.name = "Rahul";
shallowCopy1.address.city = "Mumbai";
// console.log(obj1);
// console.log(obj1.getName());
// console.log(shallowCopy1);
// console.log(shallowCopy1.getName());

// { name: 'Akshay', address: { city: 'Pune' } }
// { name: 'Akshay', address: { city: 'Mumbai' } }
// { name: 'Rahul', address: { city: 'Mumbai' } }
//---------------------END of Shallo Copy ------------------------------
const _ = require('lodash');
//DEEP COPY

const obj2 = {
    name : "Raj",
    address :{
        name: "as",
        postcode : "441224",
        created_on : Date.now(),
        modified: function () { return this.name; }
    }
}

// const structedcopyobject = structuredClone(obj2);
const deepcopyobject = _.cloneDeep(obj2);
const jsonParsecopyobject = JSON.parse(JSON.stringify(obj2));
deepcopyobject.name = "Alice";
deepcopyobject.address.postcode = "400157";


console.log(deepcopyobject);
console.log(obj2);
// console.log(structedcopyobject);
// console.log(jsonParsecopyobject.address.modified());
console.log(deepcopyobject.address.modified());


















const obj = { 
  arr: null, 
  methodFunc: function() { 
    this.arr = () => { console.log("Executing function") } 
    }, 
}

// obj.methodFunc();
// obj.arr();