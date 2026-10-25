//Input :  { a:1,b:2};
//Output : [["a":1],"b":2];
// console.log(Object.entries({ a:1,b:2}));

const obj = { a:1,b:2};
const response = [];

for(let key in obj){
    response.push([key,obj[key]]);
}
console.log(response);