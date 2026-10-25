//Input : javascript is fun;
//Output :  Javascript is fun;

let string = "javascript is fun";
// let arr = string.charAt(0).toUpperCase() + string.slice(1); //ShortCut

let result = string[0].toUpperCase();

for(let i=1; i < string.length; i++){
 result += string[i];
}

console.log(result);