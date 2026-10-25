const arr = [1,1,1,2,3,5,1,1,2,5,2,3,3,5,5,5,4,4,3,7,8,4,1];

// for(let i=0; i < arr.length; i++){
//     for(let j=0; j < arr.length; j++){
//         if(arr[j] > arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }

console.log(arr);
const freqMap = {};
for(let i=0; i < arr.length; i++){
    let cnt = arr[i];
    if(freqMap[cnt]){
        freqMap[cnt]++;
    }else{
        freqMap[cnt] = 1;
    }

}
console.log(freqMap);


let firstMax = -Infinity;
let secondMax = -Infinity;
let LastMin = -Infinity;
let firstOut,secondOut;


for(let key in freqMap){
    let count = freqMap[key];

    if(count > firstMax){
        
        secondMax = firstMax;
        firstMax = count;
        firstOut = firstMax + " : " +  key;
    }else if(count > secondMax){
       

        secondMax = count;
        secondOut = secondMax + " : " +  key;
        // LastMin = secondMax;
    }

}

const entriesArray =  Object.entries(freqMap);
const sortedEntries = entriesArray.sort(([, a], [, b]) => b - a);
console.log(sortedEntries[1]);
console.log(firstOut);
console.log(secondOut);


 