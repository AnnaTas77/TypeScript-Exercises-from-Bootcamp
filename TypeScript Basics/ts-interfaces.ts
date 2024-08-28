/* Interfaces: Learn about interfaces in TypeScript, how to define them, and how they can be used to enforce object structure and type safety.

Learn about interfaces in TypeScript, and how they can be used to define object shapes and enforce type safety.
Experiment with defining interfaces for different types of objects, such as user profiles, blog posts, or product listings.
Learn about optional properties and readonly properties, and how they can be used to define more flexible and secure interfaces.
Experiment with using interfaces to enforce type safety in your functions.
Compile your TypeScript code using the tsc command and run the resulting JavaScript code in a Node.js environment to verify that your interfaces and functions are behaving as expected.
*/


/*
Interface is a structure that defines the contract in your application. It defines the syntax for classes to follow. Classes that are derived from an interface must follow the structure provided by their interface.

The TypeScript compiler does not convert interface to JavaScript. It uses interface for type checking. This is also known as "duck typing" or "structural subtyping".

An interface is defined with the keyword interface and it can include properties and method declarations using a function or an arrow function.
*/

interface IEmployee {
    empCode: number;
    empName: string;
    getSalary: (salary: number) => number; // Arrow Function Signature
    getManagerName(name: string): string; // Function Signature without providing a Function Implementation.
    //The implementation must be provided elsewhere, like in a class that implements the interface containing this method signature.
}

// Interface and Class Implementation

class StaffMember implements IEmployee {

    //specifying that these properties exist on instances of the class and what their types should be.
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
        // The constructor parameters (code: number, name: string) are used to initialize the class properties when you create an instance of the class. 
        // They bring the values into the class from wherever the instance is created.
        this.empCode = code;
        this.empName = name;
    }

    // Arrow function for getSalary
    getSalary = (salary: number): number => {
        return salary;
    }


    getManagerName(name: string): string { 
        return name; 
    }
}

// Interface as Type - Interface in TypeScript can be used to define a type and also to implement it in the class.

interface KeyPair {
    key: number;
    value: string;
}

let kv1: KeyPair = { key:1, value:"Steve" }; // No error

console.log('KV1: ', kv1)

// let kv2: KeyPair = { key:1, val:"Steve" }; // Compiler Error: 'val' doesn't exist in type 'KeyPair'

// let kv3: KeyPair = { key:1, value:100 }; // Compiler Error


// Interface as Function Type - TypeScript interface is also used to define a type of a function. This ensures the function signature.

interface KeyValueProcessor
{
    (key: number, value: string): string;
};

function addKeyValue(key:number, value:string):string { 
    return 'addKeyValue: key = ' + key + ', value = ' + value
}

function updateKeyValue(key: number, value:string):string { 
    return 'updateKeyValue: key = '+ key + ', value = ' + value
}
    
let kvp: KeyValueProcessor = addKeyValue;
console.log(kvp(1, 'Bill')); //Output: addKeyValue: key = 1, value = Bill 

kvp = updateKeyValue;
console.log(kvp(2, 'Steve')); //Output: updateKeyValue: key = 2, value = Steve 

/*
In the above example, an interface KeyValueProcessor includes a method signature. 
This defines the function type. Now, we can define a variable of type KeyValueProcessor which can only point to functions with the same signature as defined in the KeyValueProcessor interface. So, addKeyValue or updateKeyValue function is assigned to kvp. So, kvp can be called like a function.

Trying to assign a function with a different signature will cause an error - SEE BELOW. */

// function deleteFn(member:string):void { 
//     console.log('Key deleted.')
// }
    
// let kvp4: KeyValueProcessor = deleteFn; //Compiler Error



// Interface for Objects
interface IStringObj {
    [index:string]:string
}

let strArr : IStringObj = {};
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";

console.log('strArr: ', strArr) // strArr:  { TS: 'TypeScript', JS: 'JavaScript' }

/*
Optional Property
Sometimes, we may declare an interface with excess properties but may not expect all objects to define all the given interface properties. 
We can have optional properties, marked with a "?". 
In such cases, objects of the interface may or may not define these properties. */


interface JEmployee {
    empCode: number;
    empName: string;
    empDept?:string;
}

const empObj1:JEmployee = {   // No errors
    empCode:1,
    empName:"Steve"
}

const empObj2:JEmployee = {    // No errors
    empCode:1,
    empName:"Bill",
    empDept:"IT"
}

/*
Read-Only Properties
TypeScript provides a way to mark a property as read only. This means that once a property is assigned a value, it cannot be changed!
*/

interface Citizen {
    name: string;
    readonly SSN: number;
}

const personObj: Citizen  = { SSN: 110555444, name: 'James Bond' }

personObj.name = 'Steve Smith'; // OK
// personObj.SSN = 333666888; // Compiler Error - Cannot assign to 'SSN' because it is a read-only property.

console.log('personObj: ', personObj)



// Merging Interfaces
// The simplest, and perhaps most common, type of declaration merging is interface merging. 
// At the most basic level, the merge mechanically joins the members of both declarations into a single interface with the same name.
// NOT ALLOWED with TYPE (i.e.: type Box {})

interface Box {
  height: number;
  width: number;
}
interface Box {
  scale: number;
}
const box: Box = { height: 5, width: 6, scale: 10 };

console.log('Box: ', box)