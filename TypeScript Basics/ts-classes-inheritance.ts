/** 
Inheritance: Learn about class inheritance and how to use it to create child classes that inherit properties and methods from parent classes.

Learn about class inheritance in TypeScript, and how to use it to create child classes that inherit properties and methods from parent classes.
Experiment with creating child classes that inherit properties and methods from parent classes.
Learn about the super keyword, and how it can be used to call the constructor and methods of a parent class.
Compile your TypeScript code using the tsc command and run the resulting JavaScript code in a Node.js environment to verify that your classes and inheritance are behaving as expected.
 */

class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
}

class SeniorEmployee extends Person {
    empCode: number;
    
    constructor(code: number, name:string) {
        // !!! 'super()' must be called before accessing 'this' in the constructor of a derived class.
        super(name);
        this.empCode = code;
    }
    
    displayName():void {
        console.log("Name = " + this.name +  ", Employee Code = " + this.empCode);
    }
}

let emp21 = new SeniorEmployee(100, "Bill");
emp21.displayName(); // Name = Bill, Employee Code = 100



