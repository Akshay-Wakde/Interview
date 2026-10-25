// const arr = 'abcacbcbb';
// let newArr = [];
// let bArr = [];
// let alredy = {};

// newArr = arr.split('');
// console.log(newArr);
// // console.log(arr);
// // console.log(arr.length);
// // console.log(newArr.length);

// for(let i=0; i <  newArr.length; i++){

//     if(!alredy[newArr[i]]){
//         bArr.push(newArr[i]);

//         alredy[newArr[i]] = true;
//     }
// }

// console.log(bArr.join(''));
// //abc

//-------------------------------------------------------------------------------------------------

const arr = 'abcacbcbb';
let isAlready = {};
let result = [];
for(let i=0; i < arr.length; i++){

    if(!isAlready[arr[i]]){
        result.push(arr[i])
        isAlready[arr[i]] = true;
    }
}
console.log(result.join(''));