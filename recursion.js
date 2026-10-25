// 🔁 What is Recursion in JavaScript?
// Recursion is a programming concept where a function calls itself to solve a problem.
//  Each recursive call should move the problem closer to a base case, which ends the recursion.
// Ex1
// function sumNumbers(arr){
//     let total = 0;
//     for(const num of arr){
//         if(Array.isArray(num)){
//             total += sumNumbers(num);
//         }else{
//             total += num;
//         }
//     }

//     return total;

// }
// // const arr = [1,2,3,4,5];
// const arr = [1,[2,3],4,[[[[[5]]]]]];

// console.log(sumNumbers(arr));

 //Ex2

//  function logNumber(num){
//     for(let i=1; i<=num; i++){
//         console.log(i);
//     }
//  }

// function logNumber(num ,i=1){
//     if(i<=num){
//         console.log(i);
//         logNumber(num, i+1);
//     }
// }

// logNumber(10);

const nestedObject = {
  name: "John",
  address: {
    city: "New York",
    coordinates: {
      lat: 40.7128,
      long: -74.0060
    }
  }
};

function printValues(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      printValues(obj[key]); // recursive call
    } else {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

printValues(nestedObject);
