// // const obj1 = {first: 20, second: 30, first: 50};
// // console.log(obj1);
// // //{ first: 50, second: 30 }


//ex2
// let a = [1, 2, 3, 4, 5, 6];
// var left = 0, right = 5;
// var found = false;
// var target = 5;
// while(left <= right) {
//     console.log(left, right);

//    var mid = Math.floor((left + right) / 2);
//     console.log(mid);
//    if(a[mid] == target) {
//          console.log("Found at index: " + a[mid]);
//        found = true;
//        break;
//    }
//    else if(a[mid] < target) {
//        left = mid + 1;
//    }
//    else {
//        right = mid - 1;
//    }
// }
// if(found) {
//    console.log("YES");
// }
// else {
//    console.log("NO");
// }

//ex4
// console.log(typeof(NaN)); // "number"
// console.log(typeof(null)); // "object"

//ex5
// let s = "00000001111111";
// let l = 0, r = s.length - 1, ans = -1;
// console.log(s.length+' length');
// while(l <= r) {
//    var mid = Math.floor((l + r) / 2);
//    console.log(l+' left');
//    console.log(r+' right');
//    console.log(mid+' mid');
//    console.log(s[mid]+' mid value');
//    console.log('===============================================');
//    if(s[mid] == '1') {
//        ans = mid;
//        r = mid - 1;
//    }
//    else {
//        l = mid + 1;
//    }
// }
// console.log(ans);
// // 14 length
// // 0 left
// // 13 right
// // 6 mid
// // 0 mid value
// // ===============================================
// // 7 left
// // 13 right
// // 10 mid
// // 1 mid value
// // ===============================================
// // 7 left
// // 9 right
// // 8 mid
// // 1 mid value
// // ===============================================
// // 7 left
// // 7 right
// // 7 mid
// // 1 mid value
// // ===============================================
// // 7

// ex6
// const example = ({ a, b, c }) => {
//  console.log(a, b, c);
// };
// example(0, 1, 2);
// // undefined undefined undefined
// const example = (a, b, c ) => {
//  console.log(a, b, c);
// };
// example(0, 1, 2);
// // 0 1 2

// // ex7
// function solve(arr, rotations){
//  if(rotations == 0) return arr;
//  for(let i = 0; i < rotations; i++){
//    let element = arr.pop();
//     // Move the last element to the front
//     console.log(element + ' element');
//   const un = arr.unshift(element);
//     console.log(un + ' unshift');  
//     console.log(arr + ' arr');  
//     console.log('-------------------');

//  }
//  return arr;
// }
// const s = solve([44, 1, 22, 111], 5);
// console.log(s);
// // 111 element
// // 4 unshift
// // 111,44,1,22 arr
// // -------------------
// // 22 element
// // 4 unshift
// // 22,111,44,1 arr
// // -------------------
// // 1 element
// // 4 unshift
// // 1,22,111,44 arr
// // -------------------
// // 44 element
// // 4 unshift
// // 44,1,22,111 arr
// // -------------------
// // 111 element
// // 4 unshift
// // 111,44,1,22 arr
// // -------------------
// // [ 111, 44, 1, 22 ]


// //ex8
// var a = Math.max();
// var b = Math.min();
// console.log(a);
// console.log(b);
// // -Infinity
// // Infinity

// // ex9
// const set = new Set();
// set.add(5);
// set.add('Hello');
// set.add({ name: 'Scaler' });
// for (let item of set) {
//  console.log(item + 6);
// }
// // // 11   
// // // Hello6
// // // [object Object]6

// ex10
// var a = "hello";
// var sum = 0;
// for(var i = 0; i < a.length; i++) {
//    sum += (a[i] - 'a');
// }
// print(sum);
// // // NaN

// // ex11
// function test(...args) {
//  console.log(typeof args);
// }
// test(12);

// // ex12
// var a = true + true + true * 3;
// console.log(a);
// // 5

// // ex13
// a = [1, 2, 3, 4, 5];
// console.log(a.slice(2, 4));
// [ 3, 4 ]
// // The slice() function in Javascript slices an array within the given start and end indexes and then returns the values lying in those ranges.
// // The indexing done is 0-based indexing.

// //ex14
// var a = 1;  
// var b = 0;  
// while (a <= 3)  
// {  
//    a++;  
//    b += a * 2;  
//    console.log(b);
// }
  
// // 4
// // 10
// // 18


// //ex15
// (function(){
//  setTimeout(()=> console.log(1),2000);
//  console.log(2);
//  setTimeout(()=> console.log(3),0);
//  console.log(4);
// })();

// // // 2
// // // 4
// // // 3
// // // 1

// // ex16
// <script type="text/javascript" language="javascript">
  
// var a = "Scaler";
// var result = a.substring(2, 4);
// document.write(result);
  
// </script>
// // // al

// // 17
// Q.17 When an operator’s value is NULL, the typeof returned by the unary operator is:
// // "object"

// // 18
// // When the switch statement matches the expression with the given labels, 
// // how is the comparison done?
// switch (5) {
//   case '5':
//     console.log('String 5');
//     break;
//   case 5:
//     console.log('Number 5');
//     break;
// }
// // Output: Number 5
// // The comparison is done using strict equality (===) in JavaScript. 
// // This means that both the value and the type must match for a case to be executed. 


// // 18. 
// // Which function is used to serialize an object into a JSON string in Javascript?
// // Answer:
// JSON.stringify()
// // Example:
// const obj = { name: "Scaler", age: 5 };
// const jsonString = JSON.stringify(obj);
// console.log(jsonString); // Output: {"name":"Scaler","age":5}


// // Which object in Javascript doesn’t have a prototype?
// // Answer:
// // The base object created with Object.create(null) does not have a prototype.

// const obj = Object.create(null);
// console.log(Object.getPrototypeOf(obj)); // Output: null


// // // 20.
// Which of the following are closures in Javascript?
// variable
// function
// objects
// // Answer:All of the above can be closures in JavaScript.


// Which of the following are not server-side Javascript objects?
// Date
// FileUpload
// Function
// all of above
// Answer: all of above


// let n = 24;
// let l = 0, r = 100, ans = n;
// while(l <= r) {
//    let mid = Math.floor((l + r) / 2);
//    if(mid * mid <= n) {
//        ans = mid;
//        l = mid + 1;
//    }
//    else {
//        r = mid - 1;
//    }
// }
// print(ans);


// print(parseInt("123Hello"));
// print(parseInt("Hello123"));

//123 nan
//The parseInt() method converts a string to an integer if it is possible. 
// If the string starts with a number, it will convert that numeric part and return it.
//  Else, it will return NaN.

// var a = Math.max() < Math.min();
// var b = Math.max() > Math.min();
// print(a);
// print(b)
// //true
// //false

// <script type="text/javascript" language="javascript">
 
// var x=12;
// var y=8;
// var res=eval("x+y");
// document.write(res);
 
// </script>
// // Output: 20

// <script type="text/javascript">
// a = 5 + "9";
// document.write(a);
// </script>
// // Output: 59
// // Explanation: In JavaScript, when a number is added to a string, the number is converted to a string and concatenated.
// // In this case, 5 is converted to "5" and concatenated with "9" to produce "59".

// const obj1 = {Name: "Hello", Age: 16};
// const obj2 = {Name: "Hello", Age: 16};
// print(obj1 === obj2);

// The strict equality operator compares objects by their references so even though 
// the contents of both objects are the same, their references don’t match resulting in false. 