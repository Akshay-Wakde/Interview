
function flatObject(nestedObj,parentKey = "",result = {}){
    
    for(let key in nestedObj){
        const newKey = parentKey ? `${parentKey}.${key}` : key;

        const value =  nestedObj[key];
     if(typeof value === "object"  && value !== null){
        flatObject(value , newKey,result);
     }else{
        result[newKey] = value;
     }
    }
    return result;
}

const edgeCase = {
  a: {
    b: {
      c: {
        d: 1
      }
    }
  },
  e: {}, // Empty object test
  f: [1, [2, 3]], // Nested array test
  g: 0, // Falsy value test
  "": {
    h: "Empty string key test"
  }
};

// const standardNested = {
//   user: {
//     id: 101,
//     profile: {
//       name: "Alice",
//       address: {
//         city: "New York",
//         zip: "10001"
//       }
//     },
//     settings: {
//       theme: "dark"
//     }
//   }
// };

console.log(flatObject(edgeCase))