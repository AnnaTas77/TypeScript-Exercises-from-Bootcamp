/**
Inheritance: Learn about class inheritance and how to use it to create child classes that inherit properties and methods from parent classes.

Learn about class inheritance in TypeScript, and how to use it to create child classes that inherit properties and methods from parent classes.
Experiment with creating child classes that inherit properties and methods from parent classes.
Learn about the super keyword, and how it can be used to call the constructor and methods of a parent class.
Compile your TypeScript code using the tsc command and run the resulting JavaScript code in a Node.js environment to verify that your classes and inheritance are behaving as expected.
 */
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var Person = /** @class */ (function () {
  function Person(name) {
    this.name = name;
  }
  return Person;
})();
var SeniorEmployee = /** @class */ (function (_super) {
  __extends(SeniorEmployee, _super);
  function SeniorEmployee(code, name) {
    // !!! 'super()' must be called before accessing 'this' in the constructor of a derived class.
    var _this = _super.call(this, name) || this;
    _this.empCode = code;
    return _this;
  }
  SeniorEmployee.prototype.displayName = function () {
    console.log("Name = " + this.name + ", Employee Code = " + this.empCode);
  };
  return SeniorEmployee;
})(Person);
var emp21 = new SeniorEmployee(100, "Bill");
emp21.displayName(); // Name = Bill, Employee Code = 100
// extends Clauses
// Classes may extend from a base class. A derived class has all the properties and methods of its base class, and can also define additional members.
var Animal = /** @class */ (function () {
  function Animal() {}
  Animal.prototype.move = function () {
    console.log("Moving along!");
  };
  return Animal;
})();
var Dog = /** @class */ (function (_super) {
  __extends(Dog, _super);
  function Dog() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Dog.prototype.woof = function (times) {
    for (var i = 0; i < times; i++) {
      console.log("woof!");
    }
  };
  return Dog;
})(Animal);
var dog1 = new Dog();
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
var Base = /** @class */ (function () {
  function Base() {}
  Base.prototype.greet = function () {
    console.log("Hello, world!");
  };
  return Base;
})();
var Derived = /** @class */ (function (_super) {
  __extends(Derived, _super);
  function Derived() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Derived.prototype.greet = function (name) {
    if (name === undefined) {
      _super.prototype.greet.call(this);
    } else {
      console.log("Hello, ".concat(name.toUpperCase()));
    }
  };
  return Derived;
})(Base);
var derived1 = new Derived();
derived1.greet();
derived1.greet("reader");
