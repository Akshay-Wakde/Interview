//Input : [1,2,3,2,1,4,5];
//Output : [1,2];

let arr = [1,2,3,2,1,4,5];
let seen = {};
let result = [];

for(num of arr){
    if(seen[num]){
        result.push(num);
    }else{
        seen[num] = true;
    }
}
console.log(result);