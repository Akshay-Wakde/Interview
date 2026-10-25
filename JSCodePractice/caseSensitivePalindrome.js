//Input : Madam || hello;
//Output : true || false;

let string = "Madam";
  string = string.toLowerCase();
  let isPal = true;

for(let i=0; i < string.length /2 ; i++){
    if(string[i] !== string[string.length - i -1]){
        isPal = false;
    }
}
console.log(isPal);
