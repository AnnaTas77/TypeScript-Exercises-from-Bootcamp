/* Interfaces: Learn about interfaces in TypeScript, how to define them, and how they can be used to enforce object structure and type safety.

Learn about interfaces in TypeScript, and how they can be used to define object shapes and enforce type safety.
Experiment with defining interfaces for different types of objects, such as user profiles, blog posts, or product listings.
Learn about optional properties and readonly properties, and how they can be used to define more flexible and secure interfaces.
Experiment with using interfaces to enforce type safety in your functions.
Compile your TypeScript code using the tsc command and run the resulting JavaScript code in a Node.js environment to verify that your interfaces and functions are behaving as expected.
*/
// Interface and Class Implementation
var StaffMember = /** @class */ (function () {
    function StaffMember(code, name) {
        // Arrow function for getSalary
        this.getSalary = function (salary) {
            return salary;
        };
        // The constructor parameters (code: number, name: string) are used to initialize the class properties when you create an instance of the class. 
        // They bring the values into the class from wherever the instance is created.
        this.empCode = code;
        this.empName = name;
    }
    StaffMember.prototype.getManagerName = function (name) {
        return name;
    };
    return StaffMember;
}());
var kv1 = { key: 1, value: "Steve" }; // No error
console.log('KV1: ', kv1);
;
function addKeyValue(key, value) {
    return 'addKeyValue: key = ' + key + ', value = ' + value;
}
function updateKeyValue(key, value) {
    return 'updateKeyValue: key = ' + key + ', value = ' + value;
}
var kvp = addKeyValue;
console.log(kvp(1, 'Bill')); //Output: addKeyValue: key = 1, value = Bill 
kvp = updateKeyValue;
console.log(kvp(2, 'Steve')); //Output: updateKeyValue: key = 2, value = Steve 
var strArr = {};
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";
console.log('strArr: ', strArr); // strArr:  { TS: 'TypeScript', JS: 'JavaScript' }
var empObj1 = {
    empCode: 1,
    empName: "Steve"
};
var empObj2 = {
    empCode: 1,
    empName: "Bill",
    empDept: "IT"
};
var personObj = { SSN: 110555444, name: 'James Bond' };
personObj.name = 'Steve Smith'; // OK
// personObj.SSN = 333666888; // Compiler Error - Cannot assign to 'SSN' because it is a read-only property.
console.log('personObj: ', personObj);
var box = { height: 5, width: 6, scale: 10 };
console.log('Box: ', box);
// An inline interface definition for your array that defines every element in that array, whether initially present or introduced later:
var userTestStatus = [
    { "id": 0, "name": "Available" },
    { "id": 1, "name": "Ready" },
    { "id": 2, "name": "Started" }
];
console.log('userTestStatus: ', userTestStatus);
