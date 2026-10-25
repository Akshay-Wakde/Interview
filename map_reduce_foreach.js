//  forEach()
// Purpose: Iterates through each element in the array, mainly for side effects (like logging, updating external state, etc.)

// Returns: undefined

// Modifies original array? No

// Use case: When you want to perform an action for each element, but don’t need a new array or result.


// const arr = [1, 2, 3];
// const forVar =  arr.forEach((num) => {
//   console.log(num * 2); // Just printing
// });
// console.log(forVar);
// 2
// 4
// 6
// undefined

///////////////////////////////////////////////////////////////////////////////////

//  map()
// Purpose: Transforms each element of the array and returns a new array with the transformed values.

// Returns: A new array of the same length

// Modifies original array? No

// Use case: When you want to create a new array by applying a function to each element.

// const arr = [1, 2, 3];
// const doubled = arr.map((num) => num * 2); 
// console.log(doubled);
// [2, 4, 6]

/////////////////////////////////////////////////////////////////////////////////////////

//  filter()
// Purpose: Creates a new array containing only the elements that pass a test condition.

// Returns: A new array with fewer or same number of elements

// Modifies original array? No

// Use case: When you want to exclude elements based on a condition.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const greaterThanFive = numbers.filter((number) => number > 5);

// console.log(numbers);          // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] (original array unchanged)
// console.log(evenNumbers);      // Output: [2, 4, 6, 8, 10]
// console.log(greaterThanFive);  // Output: [6, 7, 8, 9, 10]

// reduce()
// Purpose: Reduces the array to a single value by applying an accumulator function.

// Returns: Whatever you define in the accumulator (can be a number, object, array, etc.)

// Modifies original array? No

// Use case: When you want to aggregate data (like summing, averaging, or grouping).

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const output = numbers.reduce((acc,int) =>acc+int,0);
console.log(output);

