// Sure, here are some exercises for you to complete:

// 1. **Type Guard Exercise**
//     - Create a type guard function `isNumber` that checks if a value is a number.
//     - Use this type guard in a function that takes a `string | number` and prints whether the value is a string or a number.

function isNumber(value: string | number): value is number {
  return typeof value === 'number';
}

console.log(isNumber(5)); // true
console.log(isNumber('5')); // false

// 2. **Tuples and Enums Exercise**
//     - Define an enum `Status` with values `Pending`, `InProgress`, and `Completed`.
//     - Create a tuple type `Task` that contains a `Status` and a `string` description.
//     - Initialize a variable with this tuple type and log its values.

// 3. **Generics Exercise**
//     - Write a generic function `reverseArray` that takes an array of any type and returns a new array with the elements in reverse order.
//     - Test this function with arrays of different types.

// 4. **Fetch Exercise**
//     - Write an async function `fetchUser` that fetches user data from `https://jsonplaceholder.typicode.com/users/1`.
//     - Log the user data or handle errors appropriately.

// 5. **Classes Exercise**
//     - Create a class `Vehicle` with properties `make` and `model`, and a method `displayInfo` that logs these properties.
//     - Extend this class with a `Car` class that adds a `year` property and overrides the `displayInfo` method to include the year.

// 6. **Alias and Interfaces Exercise**
//     - Define a type alias `ID` for `string | number`.
//     - Create an interface `Product` with properties `id` (of type `ID`), `name`, and `price`.
//     - Write a function `printProduct` that takes a `Product` and logs its properties.

// Feel free to implement these exercises in your TypeScript file.
