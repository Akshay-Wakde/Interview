// // //Sort the array with for loop in ascending order
// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     let pivot = arr[Math.floor(arr.length / 2)];
//     let left = [];
//     let right = [];

//     for (let i = 0; i < arr.length; i++) {

//         if (i !== Math.floor(arr.length / 2)) {
//             if (arr[i] < pivot) {
//                 left.push(arr[i]);
//             } else {
//                 right.push(arr[i]);
//             }
//         }

//     }

//     return quickSort(left).concat(pivot, quickSort(right));
// }

// let array = [10, 7, 8, 9, 1];
// console.log("Sorted array:", quickSort(array));



function findSort(arr){
     if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[Math.floor(arr.length / 2)];
    let right =[];
    let left = [];

    for(let i=0; i < arr.length; i++){
        
        if(i !== Math.floor(arr.length / 2)){
            if(arr[i] < pivot){
                left.push(arr[i]);
            }else{
                right.push(arr[i]);
            }
        }
    }
    return findSort(left).concat(pivot,findSort(right));
}


const arra = [1,2,3,5,2,5,4];
console.log(findSort(arra));