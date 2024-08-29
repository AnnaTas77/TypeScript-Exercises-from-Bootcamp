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


// Getters / Setters ==============================
// Classes can also have accessors:

class Z {
  _length = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}

// Note that a field-backed get/set pair with no extra logic is very rarely useful in JavaScript. It’s fine to expose public fields if you don’t need to add additional logic during the get/set operations.

// TypeScript has some special inference rules for accessors:

// If get exists but no set, the property is automatically readonly
// If the type of the setter parameter is not specified, it is inferred from the return type of the getter


// Since TypeScript 4.3, it is possible to have accessors with different types for getting and setting.

class Thing {
  _size = 0;
 
  get size(): number {
    return this._size;
  }
 
  set size(value: string | number | boolean) {
    let num = Number(value);
 
    // Don't allow NaN, Infinity, etc
 
    if (!Number.isFinite(num)) {
      this._size = 0;
      return;
    }
 
    this._size = num;
  }
}


// TypeScript - Abstract Class =======================================
// Define an abstract class in Typescript using the abstract keyword. 
// Abstract classes are mainly for inheritance where other classes may derive from them. We cannot create an instance of an abstract class.



// Member Visibility =================================
// You can use TypeScript to control whether certain methods or properties are visible to code outside the class.

// public =================================

// The default visibility of class members is public. A public member can be accessed anywhere:

class PublicGreeter {
  public greet() {
    console.log("Hi with Public Visibility!");
  }
}
const publicGreeter = new PublicGreeter();
publicGreeter.greet();

// Because public is already the default visibility modifier, you don’t ever need to write it on a class member, but might choose to do so for style/readability reasons.

// protected ===========================

// protected members are only visible to subclasses of the class they’re declared in.

class ProtectedGreeter {
  public greet() {
    console.log("Hello from Public greet method.");
  }
  protected getNameProtected() {
    return "Hi from Protected method!";
  }
}
 
class SpecialNewGreeter extends ProtectedGreeter {
  public howdy() {
    // OK to access protected member here
    console.log("Howdy and " + this.getNameProtected());
  }
}
const protectedGreeter = new SpecialNewGreeter();
protectedGreeter.howdy(); // OK
// protectedGreeter.getNameProtected();
// Property 'getNameProtected' is protected and only accessible within class 'ProtectedGreeter' and its subclasses.



// Exposure of Protected Members =======================

// Derived classes need to follow their base class contracts, but may choose to expose a subtype of base class with more capabilities. This includes making protected members public:

class Mammal {
    protected lifespan = 20;
  }
  
  class Human extends Mammal {
    lifespan = 80;
    // 'lifespan' is auto converted to PUBLIC
  }
  
  const individual = new Human();
  console.log('Individual lifespan: ', individual.lifespan); // OK

// Note that 'Human' was already able to freely read and write 'lifespan', so this doesn’t meaningfully alter the “security” of this situation. 
// The main thing to note here is that in the derived class, we need to be careful to repeat the protected modifier if this exposure isn’t intentional.


// private ======================================

// 'private' is like 'protected', but doesn’t allow access to the member even from subclasses.

class Bird {
    private featherCount = 5000;
}

const sparrow = new Bird();
// Can't access from outside the class
// console.log(sparrow.featherCount); 
// Property 'featherCount' is private and only accessible within class 'Bird'.

class Reptile {
    private scaleCount = 2000;
}
  
const lizard = new Reptile();
// Can't access from outside the class
// console.log(lizard.scaleCount);
// Property 'scaleCount' is private and only accessible within class 'Reptile'.
  
class Snake extends Reptile {
    showScaleCount() {
      // Can't access in subclasses
      // console.log(this.scaleCount);
      // Property 'scaleCount' is private and only accessible within class 'Reptile'.
    }
}

const mySnake = new Snake()
console.log('scaleCount (SOFT PRIVATE): ', mySnake['scaleCount']) //OK because it is a SOFT PRIVATE

// 'private' in TS also allows access using bracket notation during type checking. This makes private-declared fields potentially easier to access for things like unit tests, with the drawback that these fields are 'SOFT PRIVATE' and don’t strictly enforce privacy.

/** In JS - HARD PRIVATE:
 Unlike TypeScripts’s private, JavaScript’s private fields (#) remain private after compilation and do not provide the previously mentioned escape hatches like bracket notation access, making them HARD PRIVATE.

class Dog {
  #barkAmount = 0;
  personality = "happy";
 
  constructor() {}
}
 */