/**
Classes: Learn how to define classes in TypeScript, including constructors, properties, and methods.

Review the basics of classes in TypeScript, including class declaration syntax, constructors, properties, and methods.
Experiment with defining classes for different types of objects, such as cars, animals, or employees.
Learn about access modifiers (public, private, and protected), and how they can be used to control access to class members.
Experiment with using inheritance to create child classes that inherit properties and methods from parent classes.
 */
/* When you create a new instance of a class, TypeScript needs to ensure all properties are properly set up. It accomplishes this by looking at the constructor to see that each property has an initial value. However, if you call another method from within the constructor to set up properties, TypeScript cannot guarantee that this method won't be changed or messed with in a subclass. Thus, to be safe, it requires you to initialize properties directly within the constructor. SEE BELOW */
var GoodGreeter = /** @class */ (function () {
    function GoodGreeter(name) {
        this.name = name;
    }
    return GoodGreeter;
}());
var greeter1 = new GoodGreeter('Anna');
console.log('greeter1: ', greeter1);
// readonly
// Fields may be prefixed with the readonly modifier. 
// This prevents assignments to the field outside of the constructor.
var WorldGreeter = /** @class */ (function () {
    function WorldGreeter(otherName) {
        this.name = "World";
        if (otherName !== undefined) {
            this.name = otherName;
            /*
            If 'otherName' is not undefined, it reassigns 'this.name' to 'otherName'. This assignment happens before the object is fully constructed, and it is perfectly valid to assign a 'readonly' property within the constructor.
      
            In TypeScript, you can assign a value to a 'readonly' property inside the constructor because this happens during the object’s creation phase.
            Once the object is fully constructed, the readonly keyword enforces that the property cannot be changed. */
        }
    }
    WorldGreeter.prototype.err = function () {
        // this.name = "not ok";
        // Cannot assign to 'name' because it is a read-only property.
        console.log('Error method from class WorldGreeter.');
    };
    WorldGreeter.prototype.greet = function () {
        console.log("Hello ".concat(this.name, "!"));
    };
    return WorldGreeter;
}());
var g = new WorldGreeter('Universe');
console.log(g);
g.err();
g.greet();
// g.name = "also not ok";
// Cannot assign to 'name' because it is a read-only property.
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empCode = code;
        this.empName = name;
    }
    return Employee;
}());
var newEmployee = new Employee(123, "Anna");
console.log("newEmployee name: ".concat(newEmployee.empName, ", and code: ").concat(newEmployee.empCode, "."));
var Sonar = /** @class */ (function () {
    function Sonar() {
    }
    Sonar.prototype.ping = function () {
        console.log("ping!");
    };
    return Sonar;
}());
var C = /** @class */ (function () {
    function C() {
        this.x = 0;
    }
    return C;
}());
var c = new C();
// c.y = 10;
// Property 'y' does not exist on type 'C'.
