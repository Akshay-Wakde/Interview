//separate string and number

const arr = ['a','b' ,'c' ,'d' ,1 ,2 ,3];
let numberArr = [];
let charArr = [];
const output = arr.forEach((value) =>{
    const typeOfValue = typeof (value);
    if(typeOfValue === 'number'){
        numberArr.push(value);
    }else{
        charArr.push(value);
    }

});

    // console.log(numberArr);
    // console.log(charArr);
    const result = [...charArr,...numberArr];

    console.log(result);
