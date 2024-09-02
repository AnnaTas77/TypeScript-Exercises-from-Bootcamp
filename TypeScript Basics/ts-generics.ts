function getFirstElement<ElementType>(arr: ElementType[]) {
  return arr[0];
}

const numbers = [1, 2, 3];
const firstNum = getFirstElement(numbers);

const strings = ["one", "two", "three"];
const firstString = getFirstElement(strings);

type ApiResponse<Data> = {
  data: Data;
  isError: boolean;
};

type UserResponse = ApiResponse<{ name: string; age: number }>;
type BlogResponse = ApiResponse<{ title: string }>;

const response: UserResponse = {
  data: {
    name: "Kyle",
    age: 28,
  },
  isError: false,
};

const responseBlog: BlogResponse = {
  data: {
    title: "My Blog",
  },
  isError: false,
};
