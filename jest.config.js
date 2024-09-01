module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js", "json", "node"],
  transform: {
    "^.+\\.ts$": "ts-jest", // Transform TypeScript files
    "^.+\\.js$": "babel-jest", // Transform JavaScript files (if needed)
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)$", // Match both .ts and .js test files
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
