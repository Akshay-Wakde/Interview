
function removeDuplicates(arr){

  const isThere = {};
  const result = [];

  for( let i=0; i < arr.length; i++){
    
    if(!isThere[arr[i]]){
      result.push(arr[i]);
      isThere[arr[i]] = true;
    }
      
    }
    return result;
}

const arr = [1,1,2,3,4,5,6,7,8,9,9,8];
console.log(removeDuplicates(arr));
