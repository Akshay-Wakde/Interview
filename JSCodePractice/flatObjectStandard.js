
function flatObject(nestedObject , parentKey = "", result = {}){
   
   for(let key in nestedObject){
      let value = nestedObject[key];
      let newKey = parentKey ? `${parentKey}.${key}` : key;
      if(typeof value === "object"){
        flatObject(value,newKey,result)
      }else{
        result[newKey] = value;
      }
   }
   return result;
}

const standardNested = {
  user: {
    id: 101,
    profile: {
      name: "Alice",
      address: {
        city: "New York",
        zip: "10001"
      }
    },
    settings: {
      theme: "dark"
    }
  }
};


console.log(flatObject(standardNested));