let str = "i love javascript programming";
let words = str.split(" ");
let longest = words[0]

for(word of words){
    if(word.length > longest.length){
        longest = word;
    }
}
console.log(longest);

