// GENERICS in a Function

function getFirstElement<ElementType>(arr: ElementType[]) {
  return arr[0];
}

const numbers = [1, 2, 3]; // the type on hover is 'number[]'
const firstNum = getFirstElement(numbers); // the type on hover is 'number'

const strings = ["one", "two", "three"]; // the type on hover is 'string[]'
const firstString = getFirstElement(strings); // the type on hover is 'string'

console.log("The first element with numbers: ", firstNum);
console.log("The first element with strings: ", firstString);

// ===============================================================
// GENERICS in a Type

type ApiResponse<Data> = {
  data: Data;
  isError: boolean;
};

type UserResponse = ApiResponse<{ name: string; age: number }>;
type BlogResponse = ApiResponse<{ title: string }>;

const response: UserResponse = {
  // hover over 'UserResponse' and 'data'
  data: {
    name: "Kyle",
    age: 28,
  },
  isError: false,
};

const responseBlog: BlogResponse = {
  // hover over 'BlogResponse' and 'data'
  data: {
    title: "My Blog",
  },
  isError: false,
};

// GENERICS with a Default Value

type ServerResponse<StatusData = { status: number }> = {
  data: StatusData;
  isError: boolean;
};

const responseFromServer1: ServerResponse = {
  // hover over 'data'
  data: {
    status: 200,
  },
  isError: false,
};

// Overwriting the Default Value of the Generic

const responseFromServer2: ServerResponse<{ status: string }> = {
  // hover over 'data'
  data: {
    status: "200",
  },
  isError: false,
};

// Ensuring that <Data> generic is always an object and cannot be anything else

type StrictApiResponse<Data extends object> = {
  data: Data;
  isError: false;
};

const strictResponse: StrictApiResponse<{ name: string }> = {
  // If 'StrictApiResponse<string>' => we get and error: 'Type 'string' does not satisfy the constraint 'object'. '
  data: {
    name: "hello",
  },
  isError: false,
};

// Ensuring that <Data> generic is always an object with DEFAULT VALUE

type strictResponseWithDefault<Data extends object = { status: number }> = {
  data: Data;
  isError: boolean;
};

const responseStrictDefault: strictResponseWithDefault = {
  data: {
    status: 200,
  },
  isError: false,
};

const responseOverwritingDefault: strictResponseWithDefault<{ name: string }> =
  {
    data: {
      name: "hello",
    },
    isError: false,
  };

// Generics and Interfaces


// EXAMPLE - SAME ENDPOINT with DIFFERENT QUERIES
interface UserArticle {
  title: string;
  author: string;
}

interface AdminArticle {
  title: string;
  author: string;
  content: string;
  comments: string[];
}

async function fetchData<T>(
  endpoint: string,
  role: "user" | "admin"
): Promise<T> {
  const response = await fetch(`${endpoint}?role=${role}`); // Example of using a query parameter
  const data = (await response.json()) as T;
  return data;
}

// Usage examples
const userData = await fetchData<UserArticle>(
  "https://api.example.com/articles",
  "user"
); // Fetches user data - Waits for the Promise to resolve and returns data of type "UserArticle"
const adminData = await fetchData<AdminArticle>(
  "https://api.example.com/articles",
  "admin"
); // Fetches admin data - Waits for the Promise to resolve and returns data of type "AdminArticle"


// =========================================================================================================

// EXAMPLE - DIFFERENT ENDPOINTS with PARAMS
/**
 * Fetches data from the specified API endpoint and returns it as the specified type.
 *
 * param endpoint - The URL of the API endpoint to fetch data from.
 * returns A promise that resolves to the data of type T retrieved from the API.
 */
async function fetchApiData<T>(endpoint: string): Promise<T> {
  const response = await fetch(endpoint);

  // Check if the response is successful (status code 200-299)
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data = (await response.json()) as T;
  return data;
}

// Usage examples
// const userArticleData = await fetchApiData<UserArticle>(
//   "https://api.example.com/articles/user"
// ); // Fetches user article data
// const adminArticleData = await fetchApiData<AdminArticle>(
//   "https://api.example.com/articles/admin"
// ); // Fetches admin article data
