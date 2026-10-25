const str = "madam";
let makePalidrome="";
let newP = "";
let isPalindrome = false;
for(let i=0; i < str.length; i++){
    // console.log(str[i]);
    // console.log(str[(str.length) - i - 1]);
    if(str[i] === str[(str.length) - i - 1]){
        isPalindrome = true;
    }
    if(!isPalindrome){
        makePalidrome += str[(str.length) - i - 1];
        newP = str+makePalidrome;
    }
   
   
}
console.log(isPalindrome);
console.log(newP);