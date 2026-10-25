//Constructor
//delete
//get
//has
//set



let weakmap = new WeakMap();
let obj = {};
weakmap.set(obj,"OK");
console.log(weakmap);

// 4️⃣ WeakMap
// 👉 What is it?

// A WeakMap stores key–value pairs, but:

// Keys must be objects

// Keys are weakly referenced

let obj1 = {};

const weakMap = new WeakMap();
weakMap.set(obj1, "private data");

obj1 = null; // GC removes entry

// Properties & Methods
// Method	Description
// set(key, value)	Add
// get(key)	Access
// has(key)	Check
// delete(key)	Remove

// ❌ Limitations
// ❌ No size
// ❌ Not iterable
// ❌ Only object keys


const privateData = new WeakMap();

class User {
  constructor(name, id) {
    // Store private info in the WeakMap using 'this' as the key
    privateData.set(this, { internalId: id });
    this.name = name;
  }

  getInternalId() {
    return privateData.get(this).internalId;
  }
}

const me = new User("Akshay", "99-ABC");
console.log(me.name);           // "Akshay"
console.log(me.getInternalId()); // "99-ABC"
console.log(privateData.get(me)); // Hidden from the outside scope




// ---------------------------------------------------------------------------------------------

const clickCounts = new WeakMap();

function trackClick(element) {
  let count = clickCounts.get(element) || 0;
  clickCounts.set(element, count + 1);
}

let loginBtn = document.querySelector('#login');
trackClick(loginBtn);

// Later, if loginBtn is removed from the DOM:
loginBtn = null; 
// The entry in clickCounts will be automatically deleted by garbage collection!


// Basic Methods
// The API is more limited than a standard Map because you cannot "peek" inside to see everything it contains.

// wm.set(key, value): Adds a key/value pair.

// wm.get(key): Returns the value associated with the key.

// wm.has(key): Returns a boolean if the key exists.

// wm.delete(key): Removes the entry.