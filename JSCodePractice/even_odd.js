//Write a code to sort even and odd number from array;
//[1,2,3,4,5,6,7,8,9]

const arr = [1,2,3,4,5,6,7,8,9,9,8];

function findEvenOdd(arr){

    let even = [];
    let odd = [];
    for(value of arr){
        if(value % 2 === 0){
            even.push(value);
        }else{
            odd.push(value);
        }
    }
    return {
        even :even,
        odd:odd,
    }
}
console.log(findEvenOdd(arr));
//{ even: [ 2, 4, 6, 8, 8 ], odd: [ 1, 3, 5, 7, 9, 9 ] }


