const arr = [1,2,4,0,2,0,12];

// function moveZero(nums){
//     let zeros = [];
//     let notZeros = []; 
//     for(let num of nums){
//         if(num===0){
//             zeros.push(0);
//         }else{
//             notZeros.push(num);
//         }
//     }
//     return result = [...notZeros,...zeros];

// }
// console.log(moveZero(arr));

function movedzeros(nums){
    let nonZeroIndex = 0;
    console.log("Starting array:", JSON.stringify(nums));
    console.log("----------------------------");
    for(let i=0; i < nums.length; i++){
        console.log(`Checking index ${i} (Value: ${nums[i]})`);
        if(nums[i] !== 0){
            console.log(`  🚀 Non-zero found! Swapping nums[${nonZeroIndex}] with nums[${i}]`);
            //[1,2,4,0,2,0,12];
            [nums[nonZeroIndex], nums[i]] = [nums[i],nums[nonZeroIndex]];
            // console.log([nums[nonZeroIndex], nums[i]] = [nums[i],nums[nonZeroIndex]]);
            nonZeroIndex++;
            console.log(`  Current array: ${JSON.stringify(nums)}`);
            console.log(`  Nonzero inc: ${JSON.stringify(nonZeroIndex)}`);
        }else {
            console.log(`  😴 Zero found. Doing nothing.`);
        }
    }
    return nums;
}

console.log(movedzeros(arr));