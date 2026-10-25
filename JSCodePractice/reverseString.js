//Input : hello // Two pointer method;
//Output : olleh
let str = "hello";
let arr = str.split("");
let left =0;
let right = str.length - 1;

while(left < right){
    [arr[left], arr[right]] = [arr[right], arr[left]];
    // let temp = arr[left];
    // arr[left] = arr[right];
    // arr[right] = temp;


    left++;
    right--;
}

console.log(arr.join(""));