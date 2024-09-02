# TypeScript-Exercises-from-Bootcamp

## Tasks

### Introduction to TypeScript

1. Read about what TypeScript is and why it's useful. You can start with the [official TypeScript website](https://www.typescriptlang.org/).
2. Watch or read some introductory material that explains the basic features of TypeScript, such as its static typing system and how it differs from JavaScript.
3. Explore some of the advantages of using TypeScript, such as improved code quality, easier maintenance, and better tooling support.
4. Consider how TypeScript might be useful for your particular programming needs and project requirements.

### Installation

1.  Open a terminal or command prompt and run the following command to install TypeScript globally on your machine:

    ```bash
    npm install -g typescript
    ```

    Verify that TypeScript is installed by running the command:
    bash

    ```bash
     tsc -v
    ```

This should output the version number of TypeScript that you just installed.

2. Set up a TypeScript project in your preferred code editor or IDE. This will typically involve creating a new folder for your project and configuring a tsconfig.json file to define your project settings.
3. What is tsconfig.json?

Explore TypeScript Tooling in 5 Minutes documentation for more details.

### Basic Types

- Read about the basic data types in TypeScript, such as string, number, boolean, and arrays.
- Create a new TypeScript file in your project and define some variables with different data types.
- Experiment with different ways of initializing variables, such as using template strings or explicit type annotations.
- Try assigning variables of one type to variables of another type and observe how TypeScript handles type checking and type errors.
- Compile your TypeScript code using the tsc command and run the resulting JavaScript code in a Node.js environment to verify that your variables are behaving as expected.

### Functions and Interfaces

- Functions: Learn how to define and use functions in TypeScript, including optional and default parameters, rest parameters, and function overloading.
- Interfaces: Learn about interfaces in TypeScript, how to define them, and how they can be used to enforce object structure and type safety.

#### Tasks for Functions in TS

- Review the basics of functions in TypeScript, including function declaration syntax, parameter types, and return types.
- Experiment with defining functions that take different types of parameters and return different types of values.
- Learn about optional and default parameters, and how they can be used to make functions more flexible.
- Learn about rest parameters, and how they can be used to define functions that take an arbitrary number of arguments.
- Learn about function overloading, and how it can be used to define multiple function signatures for a single function name.
- Compile your TypeScript code using the tsc command and run the resulting JavaScript code in a Node.js environment to verify that your functions are behaving as expected.

#### Tasks for Interfaces in TS

- Learn about interfaces in TypeScript, and how they can be used to define object shapes and enforce type safety.
- Experiment with defining interfaces for different types of objects, such as user profiles, blog posts, or product listings.
- Learn about optional properties and readonly properties, and how they can be used to define more flexible and secure interfaces.
- Experiment with using interfaces to enforce type safety in your functions.
- Compile your TypeScript code using the tsc command and run the resulting JavaScript code in a Node.js environment to verify that your interfaces and functions are behaving as expected.
- Rebuild a project from the first few weeks of Bootcamp to practice creating a basic TypeScript program that utilizes variables, functions, and interfaces. A few old projects to try rebuilding:

  - Rock, Paper, Scissors Project
  - Rock, Paper, Scissors, Lizard, Spock Bonus Project
  - Cash Register App

### Classes and Inheritance

- Classes: Learn how to define classes in TypeScript, including constructors, properties, and methods.
- Inheritance: Learn about class inheritance and how to use it to create child classes that inherit properties and methods from parent classes.
  By completing these tasks, you should have a good understanding of the use of classes and inheritance in TypeScript.

#### Tasks for Classes

- Review the basics of classes in TypeScript, including class declaration syntax, constructors, properties, and methods.
- Experiment with defining classes for different types of objects, such as cars, animals, or employees.
- Learn about access modifiers (public, private, and protected), and how they can be used to control access to class members.
- Experiment with using inheritance to create child classes that inherit properties and methods from parent classes.

#### Tasks for Inheritance

- Learn about class inheritance in TypeScript, and how to use it to create child classes that inherit properties and methods from parent classes.
- Experiment with creating child classes that inherit properties and methods from parent classes.
- Learn about the super keyword, and how it can be used to call the constructor and methods of a parent class.
- Compile your TypeScript code using the tsc command and run the resulting JavaScript code in a Node.js environment to verify that your classes and inheritance are behaving as expected.

  - Scooter Application Project: Recreate the Scooter Application from the Bootcamp using TypeScript.
  - Inventory Management System: Create an online store inventory that allows users to add, update, and view products in a store's inventory. Users should also be able to perform operations such as checking stock availability, calculating total inventory value, and generating inventory reports.

### Modules and Namespaces

- Modules: Learn how to use modules in TypeScript to organize your code into reusable pieces.
- Namespaces: Learn about namespaces in TypeScript and how to use them to organize your code into logical groups.

#### Tasks for Modules

- Learn about the concept of modules in TypeScript, and how they can be used to organize your code into reusable pieces.
- Experiment with defining and exporting modules in your TypeScript code.
- Learn about importing modules from other files, and how to use import statements to bring in code from other modules.
- Experiment with using different import/export syntaxes, such as default exports and namespace imports.

#### Tasks for Namespaces

- Learn about namespaces in TypeScript, and how they can be used to organize your code into logical groups.
- Experiment with defining and using namespaces in your TypeScript code.
- Learn about using dot notation to access functions and variables within a namespace.
- Experiment with nesting namespaces to create deeper hierarchies of related code.

### Generics

- Learn about generics in TypeScript, and how they can be used to create flexible and reusable code that works with a variety of data types.
- Experiment with defining and using generic functions and classes in your TypeScript code.
- Learn about using constraints to restrict the types that can be used with a generic function or class. For example, you might use a constraint to ensure that a generic function can only be used with objects that have a certain property.

### Advanced Types

- Learn about advanced types in TypeScript, and how they can be used to create more complex and expressive type definitions.
- xperiment with using union types to define variables that can hold multiple types of data.
- Experiment with using intersection types to create types that combine properties and methods from multiple other types.
- Learn about using type aliases to create shorthand names for complex types.
- Experiment with using type guards to narrow down the type of a variable based on its current value.
