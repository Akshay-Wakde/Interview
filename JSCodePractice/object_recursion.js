
const nestedObject = {
    name:"akshay",
    phone:9021286734,
    email : {
        primary:{
            firstmail:{
                google:"akshay011088@gmail.com",
                zoho:"akshay@zoho.com"
            },
            secondmail:{
                yahoo:{
                    firstone:"akshay@yahoo.com",
                    secondone:"wakde@yahoo.com",
                }
            }
        },
        second:{
            firstmail : {
                google:{
                    mail:"askay@gmail.com",
                }
            }
        },
    }
}

function getRecursion(nestedObject){
let output;
    for(const key in nestedObject){
          const value = nestedObject[key];
        if(typeof value === "object"){
            getRecursion(value);
        }else{
           console.log(`${key}: ${value}`);
        }
    }

  
}
getRecursion(nestedObject);