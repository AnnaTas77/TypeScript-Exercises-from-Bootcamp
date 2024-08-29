/**
Classes: Learn how to define classes in TypeScript, including constructors, properties, and methods.

Review the basics of classes in TypeScript, including class declaration syntax, constructors, properties, and methods.
Experiment with defining classes for different types of objects, such as cars, animals, or employees.
Learn about access modifiers (public, private, and protected), and how they can be used to control access to class members.
Experiment with using inheritance to create child classes that inherit properties and methods from parent classes.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// Getters / Setters ==============================
// Classes can also have accessors:
var Z = /** @class */ (function () {
    function Z() {
        this._length = 0;
    }
    Object.defineProperty(Z.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            this._length = value;
        },
        enumerable: false,
        configurable: true
    });
    return Z;
}());
// Note that a field-backed get/set pair with no extra logic is very rarely useful in JavaScript. It’s fine to expose public fields if you don’t need to add additional logic during the get/set operations.
// TypeScript has some special inference rules for accessors:
// If get exists but no set, the property is automatically readonly
// If the type of the setter parameter is not specified, it is inferred from the return type of the getter
// Since TypeScript 4.3, it is possible to have accessors with different types for getting and setting.
var Thing = /** @class */ (function () {
    function Thing() {
        this._size = 0;
    }
    Object.defineProperty(Thing.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            var num = Number(value);
            // Don't allow NaN, Infinity, etc
            if (!Number.isFinite(num)) {
                this._size = 0;
                return;
            }
            this._size = num;
        },
        enumerable: false,
        configurable: true
    });
    return Thing;
}());
// TypeScript - Abstract Class =======================================
// Define an abstract class in Typescript using the abstract keyword. 
// Abstract classes are mainly for inheritance where other classes may derive from them. We cannot create an instance of an abstract class.
// Member Visibility =================================
// You can use TypeScript to control whether certain methods or properties are visible to code outside the class.
// public =================================
// The default visibility of class members is public. A public member can be accessed anywhere:
var PublicGreeter = /** @class */ (function () {
    function PublicGreeter() {
    }
    PublicGreeter.prototype.greet = function () {
        console.log("Hi with Public Visibility!");
    };
    return PublicGreeter;
}());
var publicGreeter = new PublicGreeter();
publicGreeter.greet();
// Because public is already the default visibility modifier, you don’t ever need to write it on a class member, but might choose to do so for style/readability reasons.
// protected ===========================
// protected members are only visible to subclasses of the class they’re declared in.
var ProtectedGreeter = /** @class */ (function () {
    function ProtectedGreeter() {
    }
    ProtectedGreeter.prototype.greet = function () {
        console.log("Hello from Public greet method.");
    };
    ProtectedGreeter.prototype.getNameProtected = function () {
        return "Hi from Protected method!";
    };
    return ProtectedGreeter;
}());
var SpecialNewGreeter = /** @class */ (function (_super) {
    __extends(SpecialNewGreeter, _super);
    function SpecialNewGreeter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpecialNewGreeter.prototype.howdy = function () {
        // OK to access protected member here
        console.log("Howdy and " + this.getNameProtected());
    };
    return SpecialNewGreeter;
}(ProtectedGreeter));
var protectedGreeter = new SpecialNewGreeter();
protectedGreeter.howdy(); // OK
// protectedGreeter.getNameProtected();
// Property 'getNameProtected' is protected and only accessible within class 'ProtectedGreeter' and its subclasses.
// Exposure of Protected Members =======================
// Derived classes need to follow their base class contracts, but may choose to expose a subtype of base class with more capabilities. This includes making protected members public:
var Mammal = /** @class */ (function () {
    function Mammal() {
        this.lifespan = 20;
    }
    return Mammal;
}());
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lifespan = 80;
        return _this;
        // 'lifespan' is auto converted to PUBLIC
    }
    return Human;
}(Mammal));
var individual = new Human();
console.log('Individual lifespan: ', individual.lifespan); // OK
// Note that 'Human' was already able to freely read and write 'lifespan', so this doesn’t meaningfully alter the “security” of this situation. 
// The main thing to note here is that in the derived class, we need to be careful to repeat the protected modifier if this exposure isn’t intentional.
// private ======================================
// 'private' is like 'protected', but doesn’t allow access to the member even from subclasses.
var Bird = /** @class */ (function () {
    function Bird() {
        this.featherCount = 5000;
    }
    return Bird;
}());
var sparrow = new Bird();
// Can't access from outside the class
// console.log(sparrow.featherCount); 
// Property 'featherCount' is private and only accessible within class 'Bird'.
var Reptile = /** @class */ (function () {
    function Reptile() {
        this.scaleCount = 2000;
    }
    return Reptile;
}());
var lizard = new Reptile();
// Can't access from outside the class
// console.log(lizard.scaleCount);
// Property 'scaleCount' is private and only accessible within class 'Reptile'.
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Snake.prototype.showScaleCount = function () {
        // Can't access in subclasses
        // console.log(this.scaleCount);
        // Property 'scaleCount' is private and only accessible within class 'Reptile'.
    };
    return Snake;
}(Reptile));
var mySnake = new Snake();
console.log('scaleCount (SOFT PRIVATE): ', mySnake['scaleCount']); //OK because it is a SOFT PRIVATE
// 'private' in TS also allows access using bracket notation during type checking. This makes private-declared fields potentially easier to access for things like unit tests, with the drawback that these fields are 'soft private' and don’t strictly enforce privacy.
