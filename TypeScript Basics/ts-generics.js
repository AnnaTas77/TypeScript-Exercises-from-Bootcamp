// GENERICS in a Function
function getFirstElement(arr) {
    return arr[0];
}
var numbers = [1, 2, 3]; // the type on hover is 'number[]'
var firstNum = getFirstElement(numbers); // the type on hover is 'number'
var strings = ["one", "two", "three"]; // the type on hover is 'string[]'
var firstString = getFirstElement(strings); // the type on hover is 'string'
console.log("The first element with numbers: ", firstNum);
console.log("The first element with strings: ", firstString);
var response = {
    // hover over 'UserResponse' and 'data'
    data: {
        name: "Kyle",
        age: 28,
    },
    isError: false,
};
var responseBlog = {
    // hover over 'BlogResponse' and 'data'
    data: {
        title: "My Blog",
    },
    isError: false,
};
var responseFromServer1 = {
    // hover over 'data'
    data: {
        status: 200,
    },
    isError: false,
};
// Overwriting the Default Value of the Generic
var responseFromServer2 = {
    // hover over 'data'
    data: {
        status: "200",
    },
    isError: false,
};
var strictResponse = {
    // If 'StrictApiResponse<string>' => we get and error: 'Type 'string' does not satisfy the constraint 'object'. '
    data: {
        name: "hello",
    },
    isError: false,
};
var responseStrictDefault = {
    data: {
        status: 200,
    },
    isError: false,
};
var responseOverwritingDefault = {
    data: {
        name: "hello",
    },
    isError: false,
};
