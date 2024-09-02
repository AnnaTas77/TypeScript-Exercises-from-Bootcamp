/**
Advanced Types

Learn about advanced types in TypeScript, and how they can be used to create more complex and expressive type definitions.
Experiment with using union types to define variables that can hold multiple types of data.
Experiment with using intersection types to create types that combine properties and methods from multiple other types.
Learn about using type aliases to create shorthand names for complex types.
Experiment with using type guards to narrow down the type of a variable based on its current value.
 */

// 1. Union Types
// Union types allow you to define a variable that can hold multiple types of data. You use the pipe (|) symbol to separate the types.

// Union type example
let value: string | number;

value = "Hello"; // valid
console.log(value); // Output: Hello

value = 42; // valid
console.log(value); // Output: 42

// value = true; // Error: Type 'boolean' is not assignable to type 'string | number'.

// 2. Intersection Types
// Intersection types combine properties and methods from multiple types. You use the ampersand (&) symbol to create an intersection.

// Define two interfaces
interface PersonX {
  name: string;
  age: number;
}

interface EmployeeX {
  employeeId: number;
}

// Intersection type example
type EmployeeDetails = PersonX & EmployeeX;

const employee: EmployeeDetails = {
  name: "Alice",
  age: 30,
  employeeId: 12345,
};

console.log(employee); // Output: { name: 'Alice', age: 30, employeeId: 12345 }

// 3. Type Aliases
// Type aliases allow you to create shorthand names for complex types, making your code cleaner and easier to read.

// Type alias example
type PointLocator = {
  x: number;
  y: number;
};

const point111: PointLocator = {
  x: 10,
  y: 20,
};

console.log(point111); // Output: { x: 10, y: 20 }

// 4. Type Guards
// Type guards are used to narrow down the type of a variable based on its current value. You can use typeof, instanceof, or custom type guard functions.

// Type guard example using typeof

function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log("String value:", value);
  } else {
    console.log("Number value:", value);
  }
}

printValue("Hello"); // Output: String value: Hello
printValue(42); // Output: Number value: 42

// Summary
// Union Types: Allow a variable to hold multiple types (e.g., string | number).
// Intersection Types: Combine properties from multiple types (e.g., Person & Employee).
// Type Aliases: Create shorthand names for complex types (e.g., type Point).
// Type Guards: Narrow down the type of a variable based on its value (e.g., using typeof).
