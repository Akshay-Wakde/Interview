//Input [1,3,2,4,1] In the context of algorithms, a Peak Element is an element that is greater than or equal to its neighbors.
//Output = 3  ... An element arr[i] is a peak if: $arr[i-1] <= arr[i] >= arr[i+1]$.

const arr = [1,3,2,4,1];
let res;
for(let i=0; i < arr.length; i++){
    if(arr[i] > arr[i -1] && arr[i] > arr[i +1]){
         res =+ arr[i];
         break;
    }
}
console.log(res);