// firstNonRepeatedChar("aabbcddffe") --> "c" 
function firstNonRepeatedChar(str){
    const count = {};
    for(let char of str){
        count[char] = (count[char] || 0) + 1;
    }

    // for(let char of str){
    //     if(count[char] == 1){
    //         return char;
    //     }
    // }
    
    // let freq = 0;
    // for(let char of str){
    //     if(count[char]=== 1){
    //         freq++;
    //         if(freq === 2) return char;
    //     }
    // }

    for(let i=str.length - 1; i >= 0; i--){
        if(count[str[i]] === 1){
            return str[i];
        }
    }


}
const string = "aabbcddffggeeh";
console.log(firstNonRepeatedChar(string));