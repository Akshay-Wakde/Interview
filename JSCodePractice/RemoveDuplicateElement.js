const arr = ['1','2','3','4',"5",'4','5','7','6','4','3','2','1'];

//Easy with inbuilt function

// const rmDup = [ ... new Set(arr)];

// console.log(rmDup);
//------------------------------------------------------------------------
const now = Date.now()
console.log(now);
const seen = {};
const result = [];

for(const item of arr){
    // if(!seen[item]){
    //     result.push(item);
    //     seen[item] = true;
    // }

    if(!result.includes(item)){
        result.push(item);
    }
}

console.log(result);
const later = Date.now();
console.log(later);
const diff = now - later;
console.log(diff);
