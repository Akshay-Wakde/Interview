const arr = [1,1,1,2,3,5,1,1,2,5,2,3,3,5,5,5,4,4,3,7,8,4,1];
let freq = {};
for(let char of arr){
 freq[char] = ( freq[char] || 0) + 1;
}

let Largest = 0;
let SecLar = 0;

for(let count in freq){
    if(freq[count] > Largest){
        SecLar = Largest;
        Largest = freq[count];
    }else if(SecLar < freq[count] && freq[count] < Largest){
        SecLar = freq[count];
    }
}
console.log(freq);
console.log(Largest);
console.log(SecLar);



// console.log(freq);