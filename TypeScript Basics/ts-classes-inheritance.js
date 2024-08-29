/**
Inheritance: Learn about class inheritance and how to use it to create child classes that inherit properties and methods from parent classes.

Learn about class inheritance in TypeScript, and how to use it to create child classes that inherit properties and methods from parent classes.
Experiment with creating child classes that inherit properties and methods from parent classes.
Learn about the super keyword, and how it can be used to call the constructor and methods of a parent class.
Compile your TypeScript code using the tsc command and run the resulting JavaScript code in a Node.js environment to verify that your classes and inheritance are behaving as expected.
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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
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
}(Person));
var emp21 = new SeniorEmployee(100, "Bill");
emp21.displayName(); // Name = Bill, Employee Code = 100
