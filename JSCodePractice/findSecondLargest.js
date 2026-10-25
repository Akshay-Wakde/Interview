const arr = ['1','2','3','4','8','4','5','6','7','4','3','2','1'];
let max = -Infinity;
let secMax = -Infinity;
for(item of arr){
  if(item > max){
    secMax = max;
    max = item;
  }else if(secMax < item && item < max){
    secMax = item;
  }
}
console.log(max);
console.log(secMax);