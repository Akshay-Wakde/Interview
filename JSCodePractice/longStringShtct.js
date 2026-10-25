//Input : ["js","react","javascript"];
//Ouptut : ["javascript"] //Shortcut way


const arr = ["js","react","javascript"];

// const newA = [arr.reduce((a,b) => a.length > b.length ? a : b)];
// console.log(newA);
let result = "";
arr.forEach((item)=>{
    if(item.length > result.length){
        result = item
    }
});
console.log(result);