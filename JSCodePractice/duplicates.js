const arr = [0, 12, 3, 4, 56, 22, 4, 56, 12];
function removeDuplicates(array) {
  const seen = {};
  let result = [];
  for(item of arr){
    if(!seen[item]){
      result.push(item);
      seen[item] = true;
    }
  }
  return result;

}

const uniqueArr = removeDuplicates(arr);

console.log(uniqueArr); 
// Output: [0, 12, 3, 4, 56, 22]