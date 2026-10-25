// 2️⃣ Map
// 👉 What is it?

// A Map stores key–value pairs, where keys can be any type.

const map = new Map();

map.set("name", "Akshay");
// map.set(1, "one");
map.set({}, "object key");

map.set(1);
console.log(map);

// Properties & Methods
// Property / Method	Description
// size	Number of entries
// set(key, value)	Add/update
// get(key)	Access value
// has(key)	Check key
// delete(key)	Remove
// clear()	Remove all
// keys()	Iterator of keys
// values()	Iterator of values
// entries()	[key, value]
// forEach()	Iterate


// Basic Map Operations
// A Map uses a simple API: set, get, has, and delete.
const userRoles = new Map();

// 1. Adding data (set)
userRoles.set('admin', 'Akshay');
userRoles.set('editor', 'John');

// 2. Retrieving data (get)
console.log(userRoles.get('admin')); // "Akshay"

// 3. Checking for existence (has)
console.log(userRoles.has('editor')); // true

// 4. Getting the size
console.log(userRoles.size); // 2

// 5. Deleting an entry
userRoles.delete('editor');

// 2.Using Objects as Keys
// This is the "killer feature" of Maps. You can associate data with an object without actually modifying that object.
const user = { id: 101 };
const metadata = new Map();

// Using the user object as a key
metadata.set(user, { lastLogin: '2026-02-10', attempts: 3 });

console.log(metadata.get(user)); 
// { lastLogin: '2026-02-10', attempts: 3 }

const prices = new Map([
  ['apple', 1.5],
  ['banana', 0.75],
  ['mango', 2.0]
]);

// Loop through [key, value] pairs
for (const [fruit, price] of prices) {
  console.log(`${fruit} costs $${price}`);
}

// Or use forEach
prices.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});