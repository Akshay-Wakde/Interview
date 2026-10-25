//Input : [2,7,11,15]; Return index of two values where sum is target
//Output : 18
function findTwoSum(nums, target) {

// const map = {};
// for(let i=0; i< nums.length; i++){
//     let diff = target - nums[i]; //16,11,7,3
//     if(map[diff] !== undefined){
//         console.log([map[diff],i]);
//     }
//     map[nums[i]] = i;
// }
    let map = {};

for(let i=0; i < nums.length; i++){
    let complement =  target - nums[i];
    if(complement in map){
        return [complement,nums[i]];
    }
    map[nums[i]] = i;
    console.log(map, "map");
}
return [];

}
let nums = [2,7,11,15];
let target = 18;
console.log(findTwoSum(nums, target)); // Output: [7, 11]