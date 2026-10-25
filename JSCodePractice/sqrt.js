// find sqrt

// console.log(getsqrt(4));
// console.log(getsqrt(5));
// console.log(getsqrt(9));
// function getsqrt(num){

//     for(let i=1; i <= num; i++){
//         if(i * i === num){
//             return i;
//         }
//         if(i*i > num){
//             return num - i;
//         }
//     }
// }
const arr = [64, 5,17, 88, 16, 25, 64];
const res = [];

// Loop 'i' acts as the potential square root (the guesser)
// We loop up to the largest possible root needed (e.g., 100)
function findSqrt(arr){
    for(let i=0; i < arr.length; i++){
        let root=0
        let num = arr[i];
        while ((root + 1) * (root + 1) <= num) {
            root++;
        }
     if (root * root === num) {
            res.push(root);
        }

        // If 2: Handle non-perfect squares (like 88) 
        // We push the closest whole number root
        if (root * root !== num) {
            res.push(root); // For 88, this will push 9 (since 9*9=81)
        }
    }
    return res;
}
console.log(findSqrt(arr));
