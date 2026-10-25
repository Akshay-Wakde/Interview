//Nested to single array;
//Input = [1,[2,[3,4]]]
//Output = [1,2,3,4];


function singleArray(nestedArray){
let result = [];
    for(let arr of nestedArray){
        console.log(Array.isArray(arr));
        if(Array.isArray(arr)){
            result.push(...singleArray(arr));
        }else{
            result.push(arr);
        }
    }
    return result;
}

const nestrray = [1,[2,[3,4]]];
console.log(singleArray(nestrray));