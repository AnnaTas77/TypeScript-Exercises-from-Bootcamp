/* Interfaces: Learn about interfaces in TypeScript, how to define them, and how they can be used to enforce object structure and type safety.

Learn about interfaces in TypeScript, and how they can be used to define object shapes and enforce type safety.
Experiment with defining interfaces for different types of objects, such as user profiles, blog posts, or product listings.
Learn about optional properties and readonly properties, and how they can be used to define more flexible and secure interfaces.
Experiment with using interfaces to enforce type safety in your functions.
Compile your TypeScript code using the tsc command and run the resulting JavaScript code in a Node.js environment to verify that your interfaces and functions are behaving as expected.
*/
var myBlogPost = {
    id: 1,
    title: 'Learning TypeScript',
    author: 'Anna T.',
};
console.log('myBlogPost: ', myBlogPost);
function logPoint(p) {
    return "X is: ".concat(p.x, ", Y is: ").concat(p.y);
}
var point1 = { x: 12, y: 26 };
console.log('Point1: ', logPoint(point1)); // logs "X is: 12, Y is: 26"
// The point variable is never declared to be a Point type. 
// However, TypeScript compares the shape of 'point1' to the shape of 'Point' in the type-check. They have the same shape, so the code passes.
// The shape-matching only requires a subset of the object’s fields to match.
var point2 = { x: 12, y: 264, z: 89 };
console.log('Point2: ', logPoint(point2)); // logs "X is: 12, Y is: 264"
var newPerson = {
    name: 'Samatha',
    DoB: new Date(1953, 9, 15)
};
console.log('New Person: ', newPerson);
var newEmployee = newPerson;
console.log('New Employee: ', newEmployee);
var john = { name: "John Doe", age: 30 };
var jane = { name: "Jane Smith", age: 28, codingLanguages: ["TypeScript", "Python"] };
// Perfectly valid!
john = jane;
console.log('John after being re-assigned to Jane: ', john);
// Even though 'RandomPerson' and 'Developer' are distinct interfaces, we can assign a 'Developer' object to a variable of type 'RandomPerson'. This works because they both share the properties name and age.
