// Function Overloading: How to Handle Multiple Function Signatures

/* Function overloading in TypeScript allows you to have multiple functions with the same name but with a different signature (parameters and types). 
This means that the parameters have different types or the number of parameters is different for each function. The correct function to call is determined at runtime based on the arguments passed.*/

function square(x: number): number;
function square(x: number[]): number[];
function square(x: number | number[]): number | number[] {
    if (typeof x === 'number') {
        return x * x;
    } else {
        return x.map(e => e * e);
    }
}

/*
Here the first two lines describe the function signature with two different argument types, number and number[]. The actual function implementation begins on the third line, and its signature must be a union of number | number[]. The implementation uses the typeof operator to determine which branch of the implementation to use. */

console.log(square(3)); // => 9
console.log(square([3, 5, 7])) // => [9, 25, 49]

/*
Another example would be a database query function that reads a user from the database based on an ID (number), username (string), or attributes (object). 

In this example, the query function is overloaded three times, each time with a different signature. The first signature accepts a single parameter of type number, the second signature accepts a single parameter of type string, and the third signature accepts a single parameter of type Record<string, any>, which is a simple key-value map.

*/

// function query(id: number): User;
// function query(username: string): User;
// function query(attributes: Record<string, any>): User;
// function query(arg: number | string | Record<string, any>): User {
//     let condition = '';

//     if (typeof arg === 'number') {
//         // Query the database using an id
//         condition = `id: ${arg}`;
//     } else if (typeof arg === 'string') {
//         // Query the database using a username
//         condition = `username: "${arg}"`;
//     } else {
//         // Query the database using attributes
//         condition = JSON.stringify(arg);
//     }

//     return db.query(`SELECT * FROM User WHERE ${condition}`);
// }

// query(1); // => id: 1
// query('johndoe'); // => username: johndoe
// query({ firstName: 'John', lastName: 'Doe' }); // => attributes: {"firstName":"John","lastName":"Doe"}