// A Set stores unique values (no duplicates).
// Values can be primitive or objects
// Order is insertion order

// Example
const set = new Set();

set.add(1);
set.add(2);
set.add(2); // ignored

set.add({"name":"Akshay"});
set.add({"name":"Akshay"});
const user = {"name":"Akshay"};
set.add(user);
const setSize = set.size;
console.log(setSize); // 4
console.log(set); // Set {1, 2}
// { 1, 2, { name: 'Akshay' }, { name: 'Akshay' } }
const deleteSet = set.delete(user);
console.log(set); 
const hasObject = set.has(user);
console.log(hasObject);
// set.clear();
// console.log(set); 







// Property / Method	Description
// size	Number of elements
// add(value)	Add value
// delete(value)	Remove value
// has(value)	Check existence
// clear()	Remove all values
// forEach()	Iterate
// values()	Iterator
// keys()	Same as values
// entries()	[value, value]