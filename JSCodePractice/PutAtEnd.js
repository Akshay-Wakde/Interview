//From the given array shift zeros to end of the array;
const arr = ['a','b',1,'c',0,'d',0,8,'e',0];

console.log(arr.length);
let onlyNumber = [];
let onlyChar = [];
let result = [];
let zeros = [];

for(let i=0; i <  arr.length;i++){
    let isType = typeof arr[i];


console.log(isType);
    if(isType === 'number'){
        if(arr[i] === 0){
            zeros.push(0)
        }else{
         onlyNumber.push(arr[i]);

        }
    }else{
        onlyChar.push(arr[i]);
    }
}
   
console.log(onlyChar);
console.log(onlyNumber);
console.log(zeros);
result = [...onlyChar,...onlyNumber,...zeros];

console.log(result);
