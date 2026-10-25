//Input [1,2,3,4,5]; //Check given array is sorted or not;
//OutPut : true

let array = [1,2,3,4,5,10]; 
// let sorted = array.every((v,i)=> i === 0 || v >= array[i-1]); //true
// console.log(sorted);
let count = 0;
let isSort = true;
for(let i=1; i < array.length; i++){
 if(array[i] <= array[i-1]){
    isSort = false;
    break;
 }
}
console.log(isSort);