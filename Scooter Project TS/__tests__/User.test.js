const { describe, expect, test, it } = require("@jest/globals");
const User = require("../src/User");

// User tests here
describe("User class - property tests", () => {
  // test username
  test("the username should be a string", () => {
    const user = new User("Joe Bloggs", "test123", 21);
    expect(typeof user.username).toBe("string");
  });
  // test password
  test("the password should be a string", () => {
    const user = new User("Joe Bloggs", "test123", 21);
    expect(typeof user.password).toBe("string");
  });

  // test age
  test("the age should be a number", () => {
    const user = new User("Joe Bloggs", "test123", 21);
    expect(typeof user.age).toBe("number");
  });
});

// test login method
describe("User Login Method", () => {
  it("should login the user when they provide a correct password", () => {
    const user = new User("Joe Bloggs", "test123", 21);

    user.login("test123");

    expect(user.loggedIn).toBe(true);
  });

  it("throws an error if the provided password is incorrect", () => {
    const user = new User("Joe Bloggs", "password", 21);

    function tryLogin() {
      user.login("wrongpass");
    }

    expect(tryLogin).toThrow("Incorrect password.");
  });
});

// test logout
describe("User Logout Method", () => {
  it("should logout the user", () => {
    const user = new User("Joe Bloggs", "test123", 21);

    user.login("test123");
    user.logout();

    expect(user.loggedIn).toBe(false);
  });
});
