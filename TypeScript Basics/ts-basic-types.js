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
var cktr1 = {
    cktr_name: "Virat Kohli",
    cktr_team: "India",
    cktr_runs: 26000
};
var cktr2 = {
    cktr_name: "AB De Villiers",
    cktr_team: "South Africa",
    cktr_runs: 15000
};
var cktr3 = {
    cktr_name: "David Warner",
    cktr_team: "Australia",
    cktr_runs: 13000
};
var myArr1 = [cktr1, cktr2, cktr3];
myArr1.forEach(function (cktr) {
    console.log("myArr1\n Hi, My name is ".concat(cktr.cktr_name, ",\n    I play for ").concat(cktr.cktr_team, " and \n    I've already made ").concat(cktr.cktr_runs, " \n    runs while representing my country."));
});
// ARRAY of OBJECTS 2 - INLINE
var myArr2 = [
    {
        cktr_name: "Virat Kohli",
        cktr_team: "India",
        cktr_runs: 26000
    },
    {
        cktr_name: "AB De Villiers",
        cktr_team: "South Africa",
        cktr_runs: 15000
    },
    {
        cktr_name: "David Warner",
        cktr_team: "Australia",
        cktr_runs: 13000
    }
];
myArr2.forEach(function (cktr) {
    console.log("myArr2\n  Hi, My name is ".concat(cktr.cktr_name, ",\n    I play for ").concat(cktr.cktr_team, " and \n    I've already made ").concat(cktr.cktr_runs, " \n    runs while representing my country."));
});
// ARRAY of OBJECTS 3 - Using the 'typeof' operator
/*
const obj_name = {
    key1: val1,
    key2: val2
}
const array_name: Array<typeof obj_name> = [{}]
 */
var cktr4 = {
    cktr_name: "Virat Kohli",
    cktr_team: "India",
    cktr_runs: 26000
};
var cktr5 = {
    cktr_name: "AB De Villiers",
    cktr_team: "South Africa",
    cktr_runs: 15000
};
var cktr6 = {
    cktr_name: "David Warner",
    cktr_team: "Australia",
    cktr_runs: 13000
};
var myArr3 = [cktr4,
    cktr5, cktr6];
myArr3.forEach(function (cktr) {
    console.log("myArr3\n Hi, My name is ".concat(cktr.cktr_name, ",\n    I play for ").concat(cktr.cktr_team, " and \n    I've already made ").concat(cktr.cktr_runs, " \n    runs while representing my country."));
});
