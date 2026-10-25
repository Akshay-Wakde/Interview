interface User {
    email:string,
    name:string,
    userId:number,
    readonly token: string
    // startTrail : () => string,
    startTrail() : string,
    getCoupon(CouponName:string,value:number):number,
}


interface Admin extends User {
    role : "admin" | "TA" | "Customer";
}

// const hitesh : User = { 
//     token: "dad2rwfsdf",email:"aksh@gmail.com",name:"aks",userId:12322,
//     startTrail: () => {
//         return "trail";
//     },
//     getCoupon : (nameCoupan:"FIFTY50",off:50) => {
//         return 50;
//     }
// }

const hitesh : Admin = { 
    token: "dad2rwfsdf",email:"aksh@gmail.com",name:"aks",userId:12322,role:"admin",
    startTrail: () => {
        return "trail";
    },
    getCoupon : (nameCoupan:"FIFTY50",off:50) => {
        return 50;
    }
}


//Diffrence between interface and type

interface Animal {
    name:string,
}

interface Bear extends Animal{
    honey:boolean,
}

const bear = getBear()

bear.name
bear.honey


//Type

type Animals = {
    name:string,
}

type Wolf =  Animals & {
    honey:boolean
}

const wolf = getWolf();
wolf.name;
wolf.honey;