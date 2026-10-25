// 1. Lexical Scope
// A function can access variables defined in its own scope and in its parent (outer) scopes, but not inside child scopes.
//In easy language: A function can see variables defined inside itself, and it can also "look outside" to see variables defined in its parent’s neighborhood. However, the parent cannot look inside the child’s house.
// Lexical Scope means that the accessibility of variables is determined by the position of the variables within the nested function scopes. "Lexical" refers to the fact that the scope is set at compile time (where you wrote the code), not when the code runs.

// A function can access variables defined in its own scope and any parent scopes.

// However, a parent scope cannot look "down" into a child scope to find variables.