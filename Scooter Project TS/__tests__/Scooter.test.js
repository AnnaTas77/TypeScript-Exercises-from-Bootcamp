const { describe, expect, test, it } = require("@jest/globals");
const Scooter = require("../src/Scooter");
const User = require("../src/User");

// typeof scooter === object
describe("Scooter Class Properties", () => {
  test("the Scooter class should create Scooter instance", () => {
    const scooter = new Scooter("Battersea Power Station");
    expect(scooter).toBeInstanceOf(Scooter);
  });
  test("the Scooter class should have a station property, which is a string", () => {
    const scooter = new Scooter("Battersea Power Station");
    expect(scooter.station).toBe("Battersea Power Station");
  });
  test("the Scooter class should have a user property, which is null before the scooter is rented", () => {
    const scooter = new Scooter("Battersea Power Station");
    const user1 = new User("Joe Bloggs", "test123", 21);
    expect(scooter.user).toBeNull();
  });
  test("the Scooter class should have a user property, which is an user object after the scooter has been rented", () => {
    const scooter = new Scooter("Battersea Power Station");
    const user1 = new User("Joe Bloggs", "test123", 21);
    scooter.rent(user1);
    expect(scooter.user).toEqual(user1);
  });
  test("the Scooter class should have a serial property, which is a number", () => {
    const scooter = new Scooter("Battersea Power Station");
    expect(typeof scooter.serial).toBe("number");
  });
  test("the Scooter class should have a charge property, which is a number", () => {
    const scooter = new Scooter("Battersea Power Station");
    expect(typeof scooter.charge).toBe("number");
  });
  test("the Scooter class should have a isBroken property, which is a boolean", () => {
    const scooter = new Scooter("Battersea Power Station");
    expect(typeof scooter.isBroken).toBe("boolean");
  });
});

// Method tests
describe("Scooter Rent Method", () => {
  it("accepts user instance of the User class as an argument", () => {
    const scooter = new Scooter("Battersea Power Station");
    const user1 = new User("sam123", 1234, 25);
    scooter.rent(user1);
    expect(scooter.user).toEqual(user1);
  });

  it("assigns a scooter to a user if it is charged and not broken", () => {
    const scooter = new Scooter("Battersea Power Station");
    const user1 = new User("sam123", 1234, 25);
    scooter.rent(user1);
    expect(scooter.station).toBeNull();
    expect(scooter.user).toBe(user1);
  });

  it("throws an error if the scooter is not charged", () => {
    const scooter = new Scooter("Battersea Power Station");
    const user1 = new User("sam123", 1234, 25);
    scooter.charge = 10;
    function attemptRental() {
      scooter.rent(user1);
    }

    expect(attemptRental).toThrow("The scooter needs to charge.");
    expect(scooter.station).toBe("Battersea Power Station");
    expect(user1.loggedIn).toBe(false);
    expect(scooter.user).toBeNull();
  });

  it("throws an error if the scooter is broken", () => {
    const scooter = new Scooter("Battersea Power Station");
    const user1 = new User("sam123", 1234, 25);
    scooter.isBroken = true;
    function attemptRental() {
      scooter.rent(user1);
    }

    expect(attemptRental).toThrow("The scooter needs repair.");
    expect(scooter.station).toBe("Battersea Power Station");
    expect(user1.loggedIn).toBe(false);
    expect(scooter.user).toBeNull();
  });
});

describe("Scooter Dock Method", () => {
  test("should be able to return the scooter to a station", () => {
    const scooter = new Scooter("Battersea Power Station");
    const user1 = new User("sam123", 1234, 25);
    scooter.rent(user1);
    scooter.dock("London Bridge");
    expect(scooter.station).toBe("London Bridge");
    expect(scooter.user).toBeNull();
  });
});
