// 3️⃣ WeakSet
// 👉 What is it?

// A WeakSet stores only objects, and those objects are weakly referenced.

// 👉 If no other reference exists, the object can be garbage collected.

let user = { name: "Akshay" };

const weakSet = new WeakSet();
weakSet.add(user);

user = null; // object eligible for GC

// Properties & Methods
// Method	Description
// add(obj)	Add object
// delete(obj)	Remove
// has(obj)	Check existence

// ❌ Limitations
// ❌ No size
// ❌ Not iterable
// ❌ No clear()
// ❌ Only objects allowed


// 1. add()
// This method adds a new object to the WeakSet. Remember, passing a primitive (like a string or number) will throw a TypeError.

const visitedPages = new WeakSet();

let page1 = { url: '/home' };
let page2 = { url: '/dashboard' };

// Adding objects
visitedPages.add(page1);
visitedPages.add(page2);
console.log("Pages added to WeakSet.",page1,page2);

// 2. has()
// This returns a boolean indicating whether an object exists in the WeakSet. It requires the exact reference of the object.

console.log(visitedPages.has(page1)); // true
console.log(visitedPages.has({ url: '/home' })); // false (this is a new object literal)

// 3. delete()
// This removes the object reference from the collection.

visitedPages.delete(page1);

console.log(visitedPages.has(page1)); // false