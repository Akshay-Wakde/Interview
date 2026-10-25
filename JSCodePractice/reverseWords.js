//Input : hello world JS;
//Output :  JS world hello;

let str = "hello world JS";
let arr = str.split(" ");
let result = [];

for(let i = arr.length - 1; i >= 0; i--){
    result.push(arr[i]);
}
console.log(result.join(" "));