
const userObj = {
    name : "Ar",
    age:12,
}

function getObj(obj){
    return function(userData){
        return obj[userData];
    }
}

let res = getObj(userObj);

// console.log(res('age'));

//Prod examples.
//For Logger service

const logger = (env) => (module) => (logtype) => (logs) => {
    console.log(`[${env}] : [${module}]:[${logtype}]:${logs} at ${new Date().toISOString()}`);
}

const PROD_ORDERS_LOGGER = logger('PROD')('ORDERS');

PROD_ORDERS_LOGGER("INFO")("Order recieved from ORDER_ID:12345");

