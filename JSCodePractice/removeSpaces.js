//Input : "hello  world";
//Output : "hello world";

const string = "hello  world"; // string.replaceAll(" ","");
const split = string.split("");
let result = "";

for(let i=0; i<string.length;i++){
if(string[i] !== " ")
    result += string[i];
}
console.log(result);
