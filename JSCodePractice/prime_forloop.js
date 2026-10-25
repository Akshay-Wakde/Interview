//Find the prime numbers in a given range using a for loop
// Output: [2, 3, 5, 7]
function findPrimeNumber(arr){
    let prime = [];

    for(let i=0; i <= arr.length; i++){
        let isPrime = true;
        let num = arr[i];
        if(num > 1){

            for(j=2; j <= Math.sqrt(num); j++){
                if(num % 2 === 0){
                    isPrime = false;
                    break;
                }
            }
            if(isPrime=== true){
                prime.push(num);
            }
        }
        
    }
    return prime;
}

const arr = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,19,17];
const output = findPrimeNumber(arr);

console.log(output);