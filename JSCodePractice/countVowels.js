const str = "The happiest place on Earth";
const vowels = ["a", "e", "i", "o", "u"];
const strToLower = str.toLowerCase().split("");
let count = 0;


function countVowels(string){
    // for(let char of string){
    //     if(vowels.includes(char)){
    //         count++;
    //     }
    // }
    str.toLowerCase().split("").forEach((char)=>{
        vowels.includes(char) ? count++ : null;
    })
    return count;
}

console.log(countVowels(strToLower));