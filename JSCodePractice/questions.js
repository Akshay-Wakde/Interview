//Sum of n numbers
// 5 = 5+4+3+2+1 = 15
function sum(n){
return n*(n+1)/2;
}
// console.log(sum(5)); 15

//sum of digits
// 1111 = 1+1+1+1 = 4
function sumOfDigits(num){

    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

// console.log(sumOfDigits(1234)); 10

//Find number of count in digits.
//53432 = 5 digits
function countOfDigits(num){
    num = Math.abs(num);
    let count = 0;
    do {
        count ++;
        num = Math.floor(num / 10);
    } while (condition);
}