const { describe, expect, test, it } = require("@jest/globals");

const User = require("../src/User");
const ScooterApp = require("../src/ScooterApp");
const Scooter = require("../src/Scooter");

// ScooterApp tests here

// register user
describe("registerUser method tests", () => {
  it("should return instance of User", () => {
    const scooterApp = new ScooterApp();
    const response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(response).toBeInstanceOf(User);
  });

  it("should throw an error if the user is younger than 18", () => {
    const scooterApp = new ScooterApp();

    function tryToLogYoungerUser() {
      scooterApp.registerUser("Anna Tas", "test123", 16);
    }
    expect(tryToLogYoungerUser).toThrow("This user is too young to register.");
  });

  it("should throw an error if the user is already registered", () => {
    const scooterApp = new ScooterApp();
    const response = scooterApp.registerUser("Joe Bloggs", "test123", 21);

    function tryToLogRegisteredUser() {
      scooterApp.registerUser("Joe Bloggs", "test123", 21);
    }

    expect(tryToLogRegisteredUser).toThrow("This user is already registered.");
  });
});

// log in

describe("loginUser method tests", () => {
  test("should locate the registered user by name and call its login method", () => {
    const scooterApp = new ScooterApp();
    scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(scooterApp.loginUser("Joe Bloggs", "test123")).toBe(true);
  });

  test("if the user cannot be located, then throw an error: The username is incorrect or this user does not exist.", () => {
    const scooterApp = new ScooterApp();

    function attemptToLoginUnregisteredUser() {
      scooterApp.loginUser("Alice Green", "test123");
    }

    expect(attemptToLoginUnregisteredUser).toThrow(
      "The username is incorrect or this user does not exist."
    );
  });

  test("if the password is incorrect, then throw an error: Incorrect password.", () => {
    const scooterApp = new ScooterApp();
    scooterApp.registerUser("Joe Bloggs", "test123", 21);

    function attemptToLoginWithWrongPassword() {
      scooterApp.loginUser("Joe Bloggs", "wrongPassword");
    }

    expect(attemptToLoginWithWrongPassword).toThrow("Incorrect password.");
  });
});

// log out

describe("logoutUser method tests", () => {
  test("should locate the registered user and call its logout method", () => {
    const scooterApp = new ScooterApp();
    scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(scooterApp.logoutUser("Joe Bloggs")).toBe(false);
  });

  test("if the user cannot be located, throw no such user is logged in error", () => {
    const scooterApp = new ScooterApp();
    scooterApp.registerUser("Joe Bloggs", "test123", 21);

    function attemptToLogoutWithWrongPassword() {
      scooterApp.logoutUser("Harry Potter");
    }

    expect(attemptToLogoutWithWrongPassword).toThrow(
      "No such user is logged in."
    );
  });
});

// create scooter

describe("createScooter method tests", () => {
  test("should create and return the new scooter", () => {
    const scooterApp = new ScooterApp();
    const testScooter = {
      station: "Victoria",
      user: null,
      serial: 1,
      charge: 100,
      isBroken: false,
    };
    expect(scooterApp.createScooter("Victoria")).toEqual(testScooter);
  });

  test("if the station does not exist, throws an error", () => {
    const scooterApp = new ScooterApp();

    function createForNonExistingStation() {
      scooterApp.createScooter("Manchester");
    }

    expect(createForNonExistingStation).toThrow("No such station.");
  });
});

// dock scooter

describe("dockScooter method tests", () => {
  test("should add the scooter to the station’s scooter list", () => {
    const scooterApp = new ScooterApp();
    const newScooter = scooterApp.createScooter("Piccadilly");

    scooterApp.dockScooter(newScooter, "Victoria");

    expect(newScooter.station).toBe("Victoria");
  });

  test("if the station does not exist, throws an error", () => {
    const scooterApp = new ScooterApp();
    const newScooter = scooterApp.createScooter("Piccadilly");

    function dockForNonExistingStation() {
      scooterApp.dockScooter(newScooter, "Manchester");
    }

    expect(dockForNonExistingStation).toThrow("No such station.");
  });

  test("if the scooter is already at this station, throws an error", () => {
    const scooterApp = new ScooterApp();
    const newScooter = scooterApp.createScooter("Piccadilly");

    function tryToDockAtSameStation() {
      scooterApp.dockScooter(newScooter, "Piccadilly");
    }

    expect(tryToDockAtSameStation).toThrow("Scooter already at station.");
  });
});

// rent scooter

describe("rentScooter method tests", () => {
  it("should locate the given scooter at one of the stations, and remove it from that station", () => {
    const scooterApp = new ScooterApp();
    const newScooter = scooterApp.createScooter("Piccadilly");
    const newUser = new User("Jane Doe", "test123", 21);

    const currentScooterStation = newScooter.station;
    const allStations = scooterApp.stations;

    scooterApp.rentScooter(newScooter, newUser);

    expect(newScooter.station).toBeNull();
    expect(allStations[currentScooterStation]).toEqual([]);
  });

  it("if the scooter is already rented, it should throw an error", () => {
    const scooterApp = new ScooterApp();
    const newScooter = scooterApp.createScooter("Piccadilly");
    const user1 = new User("Jane Doe", "test123", 21);
    const user2 = new User("Jane Doe", "test123", 21);

    const currentScooterStation = newScooter.station;
    const allStations = scooterApp.stations;

    scooterApp.rentScooter(newScooter, user1);

    function tryToRentARentedScooter() {
      scooterApp.rentScooter(newScooter, user2);
    }

    expect(tryToRentARentedScooter).toThrow("Scooter already rented.");
  });
});
