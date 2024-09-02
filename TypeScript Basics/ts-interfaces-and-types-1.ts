/* Interfaces: Learn about interfaces in TypeScript, how to define them, and how they can be used to enforce object structure and type safety.

Learn about interfaces in TypeScript, and how they can be used to define object shapes and enforce type safety.
Experiment with defining interfaces for different types of objects, such as user profiles, blog posts, or product listings.
Learn about optional properties and readonly properties, and how they can be used to define more flexible and secure interfaces.
Experiment with using interfaces to enforce type safety in your functions.
Compile your TypeScript code using the tsc command and run the resulting JavaScript code in a Node.js environment to verify that your interfaces and functions are behaving as expected.
*/

//You can explicitly describe this object’s shape using an interface declaration:

interface BlogPost {
  id: number;
  title: string;
  author: string;
}

const myBlogPost: BlogPost = {
  id: 1,
  title: "Learning TypeScript",
  author: "Anna T.",
};

console.log("myBlogPost: ", myBlogPost);

//You can use interfaces to annotate parameters and return values to functions.

// Structural Type System 1

// One of TypeScript’s core principles is that type checking focuses on the shape that values have.
// This is sometimes called “duck typing” or “structural typing”.

// In a structural type system, if two objects have the same shape, they are considered to be of the same type.

interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point): string {
  return `X is: ${p.x}, Y is: ${p.y}`;
}

const point1 = { x: 12, y: 26 };
console.log("Point1: ", logPoint(point1)); // logs "X is: 12, Y is: 26"

// The point variable is never declared to be a Point type.
// However, TypeScript compares the shape of 'point1' to the shape of 'Point' in the type-check. They have the same shape, so the code passes.

// The shape-matching only requires a subset of the object’s fields to match.

const point2 = { x: 12, y: 264, z: 89 };
console.log("Point2: ", logPoint(point2)); // logs "X is: 12, Y is: 264"

// Structural Type System 2

type PersonY = {
  name: string;
  DoB: Date;
};

type Employee = {
  name: string;
  DoB: Date;
};

const newPerson: PersonY = {
  name: "Samantha",
  DoB: new Date(1953, 9, 15),
};

console.log("New Person: ", newPerson);

const newEmployee: Employee = newPerson;
console.log("New Employee: ", newEmployee);

/** 
In this TypeScript example above you can see that a variable declared as the Person type is assignable to a variable of the Employee type without any casting, coercion, 
or even knowing ahead of time that both of these types, as named, existed at all. 
That last point really cuts to the heart of what is going on here. 
The names of these types (“Person” and “Employee”) were irrelevant to the compiler because fundamentally they are just aliases for the exact same type. 
The structure is the type!
 */

// Structural Type System 3 - with INTERFACES

interface RandomPerson {
  name: string;
  age: number;
}

interface Developer {
  name: string;
  age: number;
  codingLanguages: string[];
}

let john: RandomPerson = { name: "John Doe", age: 30 };
let jane: Developer = {
  name: "Jane Smith",
  age: 28,
  codingLanguages: ["TypeScript", "Python"],
};

// Perfectly valid!
john = jane;
console.log("John after being re-assigned to Jane: ", john);
// Even though 'RandomPerson' and 'Developer' are distinct interfaces, we can assign a 'Developer' object to a variable of type 'RandomPerson'.
//This works because they both share the properties name and age.
