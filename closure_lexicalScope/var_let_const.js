// 1. Scope (The Neighborhood)
// var is Function Scoped: If you create a var inside a function, it stays there. But if you create it inside an if statement or a for loop, it "leaks" out and can be seen by the whole function.

// let & const are Block Scoped: They stay strictly inside the curly braces {} where they were born. They don't leak out of loops or if-statements.

// 2. Reassignment (The "Can I change my mind?" Rule)
// var & let: You can change the value whenever you want.
// const: Short for "Constant." Once you give it a value, you cannot change it. (Think of it as a permanent label).
// Note: If a const holds an object or array, you can still change the "stuff" inside them, but you can't point the variable to a completely new object.

// 3.Hoisting (The "Ghost" Variable)
// As we discussed earlier:
// var: Hoisted and initialized as undefined. You can use it before its line (though it’s usually a bad idea).
// let & const: Hoisted but uninitialized. If you try to use them before their line, the code crashes (Temporal Dead Zone).