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


// extends Clauses
// Classes may extend from a base class. A derived class has all the properties and methods of its base class, and can also define additional members.

class Animal {
  move() {
    console.log("Moving along!");
  }
}
 
class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
}
 
const dog1 = new Dog();
// Animal class method
dog1.move();
// Dog class method
dog1.woof(3);


// Overriding Methods ====================

// A derived class can also override a base class field or property. 
// You can use the super. syntax to access base class methods. 
// Note that because JavaScript classes are a simple lookup object, there is no notion of a “super field”.
// TypeScript enforces that a derived class is always a subtype of its base class.

// For example, here’s a legal way to override a method:

class Base {
  greet() {
    console.log("Hello, world!");
  }
}
 
class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}
 
const derived1 = new Derived();
derived1.greet();
derived1.greet("reader");