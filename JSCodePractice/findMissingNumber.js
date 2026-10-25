//Input : [1,2,4,5]
//Output : 3

let arr = [1,2,3,4,5,7];
let n = 7;

let expected = n*(n+1)/2;

let actual = arr.reduce((a,b)=> a+b,0);
console.log(expected - actual);