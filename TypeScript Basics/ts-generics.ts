// GENERICS in a Function

function getFirstElement<ElementType>(arr: ElementType[]) {
  return arr[0];
}

const numbers = [1, 2, 3];
const firstNum = getFirstElement(numbers);

const strings = ["one", "two", "three"];
const firstString = getFirstElement(strings);

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
