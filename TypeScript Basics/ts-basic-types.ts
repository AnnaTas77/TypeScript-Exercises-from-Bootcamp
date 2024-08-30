/** Basic Types

Read about the basic data types in TypeScript, such as string, number, boolean, and arrays.
Create a new TypeScript file in your project and define some variables with different data types.
Experiment with different ways of initializing variables, such as using template strings or explicit type annotations.
Try assigning variables of one type to variables of another type and observe how TypeScript handles type checking a type errors.
Compile your TypeScript code using the tsc command and run the resulting JavaScript code in a Node.js environment to verify that your variables are behaving as expected.
 */

let myName: string = "Anna";

const height: number = 170;

const isCoder: boolean = true;

// ARRAYS

// Using square brackets. This method is similar to how you would declare arrays in JavaScript.

let fruits1: string[] = ["Apple", "Orange", "Banana"];

console.log("Fruits 1: ", fruits1);

// Using a generic array type, Array<elementType>.

let fruits2: Array<string> = ["Apple", "Orange", "Banana"];

console.log("Fruits 2: ", fruits2);

// An array that is declared and initialized separately.

let veggies: Array<string>;

veggies = ["carrot", "spinach", ""];

console.log("Veggies: ", veggies);

// ARRAY of OBJECTS 1

interface Cricketer {
  cktr_name: string;
  cktr_team: string;
  cktr_runs: number;
}
const cktr1 = {
  cktr_name: "Virat Kohli",
  cktr_team: "India",
  cktr_runs: 26000,
};
const cktr2 = {
  cktr_name: "AB De Villiers",
  cktr_team: "South Africa",
  cktr_runs: 15000,
};
const cktr3 = {
  cktr_name: "David Warner",
  cktr_team: "Australia",
  cktr_runs: 13000,
};

const myArr1: Cricketer[] = [cktr1, cktr2, cktr3];

myArr1.forEach((cktr) => {
  console.log(`myArr1\n Hi, My name is ${cktr.cktr_name},
    I play for ${cktr.cktr_team} and 
    I've already made ${cktr.cktr_runs} 
    runs while representing my country.`);
});

// ARRAY of OBJECTS 2 - INLINE

const myArr2: Array<{
  cktr_name: string;
  cktr_team: string;
  cktr_runs: number;
}> = [
  {
    cktr_name: "Virat Kohli",
    cktr_team: "India",
    cktr_runs: 26000,
  },
  {
    cktr_name: "AB De Villiers",
    cktr_team: "South Africa",
    cktr_runs: 15000,
  },
  {
    cktr_name: "David Warner",
    cktr_team: "Australia",
    cktr_runs: 13000,
  },
];

myArr2.forEach((cktr) => {
  console.log(`myArr2\n  Hi, My name is ${cktr.cktr_name},
    I play for ${cktr.cktr_team} and 
    I've already made ${cktr.cktr_runs} 
    runs while representing my country.`);
});

// ARRAY of OBJECTS 3 - Using the 'typeof' operator

/*
const obj_name = {
    key1: val1,
    key2: val2
}
const array_name: Array<typeof obj_name> = [{}]
 */

const cktr4 = {
  cktr_name: "Virat Kohli",
  cktr_team: "India",
  cktr_runs: 26000,
};
const cktr5 = {
  cktr_name: "AB De Villiers",
  cktr_team: "South Africa",
  cktr_runs: 15000,
};
const cktr6 = {
  cktr_name: "David Warner",
  cktr_team: "Australia",
  cktr_runs: 13000,
};

const myArr3: Array<typeof cktr5> = [cktr4, cktr5, cktr6];

myArr3.forEach((cktr) => {
  console.log(`myArr3\n Hi, My name is ${cktr.cktr_name},
    I play for ${cktr.cktr_team} and 
    I've already made ${cktr.cktr_runs} 
    runs while representing my country.`);
});
