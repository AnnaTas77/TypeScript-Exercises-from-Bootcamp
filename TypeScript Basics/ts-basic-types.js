/** Basic Types

Read about the basic data types in TypeScript, such as string, number, boolean, and arrays.
Create a new TypeScript file in your project and define some variables with different data types.
Experiment with different ways of initializing variables, such as using template strings or explicit type annotations.
Try assigning variables of one type to variables of another type and observe how TypeScript handles type checking a type errors.
Compile your TypeScript code using the tsc command and run the resulting JavaScript code in a Node.js environment to verify that your variables are behaving as expected.
 */
var myName = 'Anna';
var height = 170;
var isCoder = true;
// ARRAYS
// Using square brackets. This method is similar to how you would declare arrays in JavaScript.
var fruits1 = ['Apple', 'Orange', 'Banana'];
console.log('Fruits 1: ', fruits1);
// Using a generic array type, Array<elementType>.
var fruits2 = ['Apple', 'Orange', 'Banana'];
console.log('Fruits 2: ', fruits2);
// An array that is declared and initialized separately.
var veggies;
veggies = ['carrot', 'spinach', ''];
console.log('Veggies: ', veggies);
