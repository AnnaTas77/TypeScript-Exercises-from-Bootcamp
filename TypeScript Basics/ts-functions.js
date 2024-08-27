/** Functions and Interfaces
This section covers the following topics:

Functions: Learn how to define and use functions in TypeScript, including optional and default parameters, rest parameters, and function overloading.


Review the basics of functions in TypeScript, including function declaration syntax, parameter types, and return types.
Experiment with defining functions that take different types of parameters and return different types of values.
Learn about optional and default parameters, and how they can be used to make functions more flexible.
Learn about rest parameters, and how they can be used to define functions that take an arbitrary number of arguments.
Learn about function overloading, and how it can be used to define multiple function signatures for a single function name.
Compile your TypeScript code using the tsc command and run the resulting JavaScript code in a Node.js environment to verify that your functions are behaving as expected.
 */
// Named Function with Parameter and Return Types
function sumNumbers(num1, num2) {
    return num1 + num2;
}
console.log('sumNumbers: ', sumNumbers(5, 7));
// Anonymous Function 
var sum = function (x, y) {
    return x + y;
};
console.log('Sum: ', sum(2, 3));
// Arrow Function
var greeting = function (name) {
    return "Hello, ".concat(name, "!");
};
console.log('Greeting: ', greeting('Anna'));
// Optional Parameter 'name'
function greetSomeone(greeting, name) {
    return greeting + ' ' + name + '!';
}
console.log(greetSomeone('Hello', 'Steve')); //OK, returns "Hello Steve!"
console.log(greetSomeone('Hi')); // OK, returns "Hi undefined!".
// greetSomeone('Hi','Bill','Gates'); //Compiler Error: Expected 2 arguments, but got 3.
// Default Parameter
function greetWithDefaultParam(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return greeting + ' ' + name + '!';
}
console.log(greetWithDefaultParam('Steve')); //"Hello Steve!"
console.log(greetWithDefaultParam('Steve', 'Hi')); //"Hi Steve!".
console.log(greetWithDefaultParam('Bill')); //"Hello Bill!"
function add(a, b) {
    return a + b;
}
/**  The first signature has two parameters of type string, whereas the second signature has two parameters of the type number.

The last function should have the function implementation. Since the return type can be either string or number as per the first two function declarations, we must use compatible parameters and return type as any in the function definition.

Function overloading with different number of parameters and types with same name is not supported. */
console.log(add("Hello ", "Steve")); // returns "Hello Steve" 
console.log(add(10, 20)); // returns 30 
// Rest Parameters
/** When the number of parameters that a function will receive is not known or can vary, we can use rest parameters.
 We can pass zero or more arguments to the rest parameter. The compiler will create an array of arguments with the rest parameter name provided by us.
 We have a function with two parameters: greeting and names. Here, names is a rest parameter denoted by ellipses .... While calling the function, we first pass "Steve", "Bill" as the rest parameters. These are combined into a string array by joining the elements of the names array. Hence, it returns "Hello Steve, Bill!".
 During the second function call, we do not pass any arguments as the rest parameters. This is accepted by the compiler and hence the output is "Hello !"
 */
function greetWithRestParams(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return greeting + " " + names.join(", ") + "!";
}
console.log(greetWithRestParams("Hello", "Steve", "Bill")); // returns "Hello Steve, Bill!"
console.log(greetWithRestParams("Hello")); // returns "Hello !"
// Rest Parameters and Arrow Functions
var greetArrowFn = function (greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return greeting + " " + names.join(", ") + "!";
};
console.log(greetArrowFn("Hello", "Steve", "Bill")); // returns "Hello Steve, Bill!"
console.log(greetArrowFn("Hello")); // returns "Hello !"
