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
var value;
value = "Hello"; // valid
console.log(value); // Output: Hello
value = 42; // valid
console.log(value); // Output: 42
var employee = {
    name: "Alice",
    age: 30,
    employeeId: 12345,
};
console.log(employee); // Output: { name: 'Alice', age: 30, employeeId: 12345 }
var point111 = {
    x: 10,
    y: 20,
};
console.log(point111); // Output: { x: 10, y: 20 }
// 4. Type Guards
// Type guards are used to narrow down the type of a variable based on its current value. You can use typeof, instanceof, or custom type guard functions.
// Type guard example using typeof
function printValue(value) {
    if (typeof value === "string") {
        console.log("String value:", value);
    }
    else {
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
