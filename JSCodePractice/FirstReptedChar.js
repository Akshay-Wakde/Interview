//find first repeted char in string


const string = "suecess";

function findRepetedString(string){
    const res = {};
    for(let char of string){
        if(res[char]){
            return char;
        }
        res[char] = true;
    }
}

console.log(findRepetedString(string));