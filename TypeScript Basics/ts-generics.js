/**
Generics

Learn about generics in TypeScript, and how they can be used to create flexible and reusable code that works with a variety of data types.
Experiment with defining and using generic functions and classes in your TypeScript code.
Learn about using constraints to restrict the types that can be used with a generic function or class.
For example, you might use a constraint to ensure that a generic function can only be used with objects that have a certain property.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
function fetchData(endpoint, role) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(endpoint, "?role=").concat(role))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = (_a.sent());
                    return [2 /*return*/, data];
            }
        });
    });
}
// Usage examples
// const userData = await fetchData<UserArticle>(
//   "https://api.example.com/articles",
//   "user"
// ); // Fetches user data - Waits for the Promise to resolve and returns data of type "UserArticle"
// const adminData = await fetchData<AdminArticle>(
//   "https://api.example.com/articles",
//   "admin"
// ); // Fetches admin data - Waits for the Promise to resolve and returns data of type "AdminArticle"
// =========================================================================================================
// EXAMPLE - DIFFERENT ENDPOINTS with PARAMS
/**
 * Fetches data from the specified API endpoint and returns it as the specified type.
 *
 * param endpoint - The URL of the API endpoint to fetch data from.
 * returns A promise that resolves to the data of type T retrieved from the API.
 */
function fetchApiData(endpoint) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(endpoint)];
                case 1:
                    response = _a.sent();
                    // Check if the response is successful (status code 200-299)
                    if (!response.ok) {
                        throw new Error("Error fetching data: ".concat(response.statusText));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = (_a.sent());
                    return [2 /*return*/, data];
            }
        });
    });
}
// Usage examples
// const userArticleData = await fetchApiData<UserArticle>(
//   "https://api.example.com/articles/user"
// ); // Fetches user article data
// const adminArticleData = await fetchApiData<AdminArticle>(
//   "https://api.example.com/articles/admin"
// ); // Fetches admin article data
