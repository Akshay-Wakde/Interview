//Input // [20,45,150,30]
//Output //Check any number is greater than 100;

const array = [20,45,150,30];

const check =  array.some((value) => {
    if(value > 100){
        return value;
    }
});

console.log(check)