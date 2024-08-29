/** 
Classes: Learn how to define classes in TypeScript, including constructors, properties, and methods.

Review the basics of classes in TypeScript, including class declaration syntax, constructors, properties, and methods.
Experiment with defining classes for different types of objects, such as cars, animals, or employees.
Learn about access modifiers (public, private, and protected), and how they can be used to control access to class members.
Experiment with using inheritance to create child classes that inherit properties and methods from parent classes.
 */

/* When you create a new instance of a class, TypeScript needs to ensure all properties are properly set up. It accomplishes this by looking at the constructor to see that each property has an initial value. However, if you call another method from within the constructor to set up properties, TypeScript cannot guarantee that this method won't be changed or messed with in a subclass. Thus, to be safe, it requires you to initialize properties directly within the constructor. SEE BELOW */

class GoodGreeter {
    name: string;
   
    constructor(name:string) {
      this.name = name;
    }
}

const greeter1 = new GoodGreeter('Anna')

console.log('greeter1: ', greeter1)


// readonly
// Fields may be prefixed with the readonly modifier. 
// This prevents assignments to the field outside of the constructor.

class WorldGreeter {
  readonly name: string = "World";
 
  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
      /* 
      If 'otherName' is not undefined, it reassigns 'this.name' to 'otherName'. This assignment happens before the object is fully constructed, and it is perfectly valid to assign a 'readonly' property within the constructor.

      In TypeScript, you can assign a value to a 'readonly' property inside the constructor because this happens during the object’s creation phase. 
      Once the object is fully constructed, the readonly keyword enforces that the property cannot be changed. */
    }
  }
 
  err() {
    // this.name = "not ok";
    // Cannot assign to 'name' because it is a read-only property.
    console.log('Error method from class WorldGreeter.')
  }

  greet(){
    console.log(`Hello ${this.name}!`)
  }
}


const g = new WorldGreeter('Universe');
console.log(g)
g.err()
g.greet()
// g.name = "also not ok";
// Cannot assign to 'name' because it is a read-only property.


class Employee {

    empCode: number;
    empName: string;
    
    constructor(code: number, name: string ) {
        this.empCode = code;
        this.empName = name;
    }
}

const newEmployee =  new Employee(123, "Anna")

console.log(`newEmployee name: ${newEmployee.empName}, and code: ${newEmployee.empCode}.`)


// 'implements' Clauses
// You can use an implements clause to check that a class satisfies a particular interface. An error will be issued if a class fails to correctly implement it:

interface Pingable {
  ping(): void;
}
 
class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}
 
// class Ball implements Pingable {
//     // Class 'Ball' incorrectly implements interface 'Pingable'.
//     // Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
//   pong() {
//     console.log("pong!");
//   }
// }

// Classes may also implement multiple interfaces, e.g. class C implements A, B {}



// Implementing an interface with an optional property doesn’t create that property:

interface A {
  x: number;
  y?: number;
}
class C implements A {
  x = 0;
}
const c = new C();
// c.y = 10;
// Property 'y' does not exist on type 'C'.