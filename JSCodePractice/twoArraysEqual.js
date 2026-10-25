//Input [1,2,3] = [1,2,3] = true; check two arrays are equal or not
 //     [1,2,3] = [3,2,1] = false;

 const arr1 = [1,2,3];
 const arr2 = [1,2,3];
let isSame = true;
 for(let i=0; i < arr1.length; i++){

    if(arr1[i] !== arr2[i]){
        isSame = false;
        break;
    }
 }

 console.log(isSame);
 


