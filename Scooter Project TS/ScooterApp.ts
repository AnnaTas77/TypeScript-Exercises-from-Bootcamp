import Scooter from "./Scooter";
import User from "./User";
import {
  StationsType,
  RegisteredUsers,
  ScooterAppInterface,
  ScooterInterface,
  UserInterface,
} from "./types";

class ScooterApp implements ScooterAppInterface {
  stations: StationsType = {
    "Battersea Power Station": [],
    "London Bridge": [],
    Victoria: [],
    Piccadilly: [],
    Richmond: [],
  };

  registeredUsers: RegisteredUsers = {};

  registerUser(username: string, password: string, age: number): UserInterface {
    const newUser = new User(username, password, age);
    const currentUserName = newUser.username;

    if (this.registeredUsers.hasOwnProperty(currentUserName)) {
      throw new Error("This user is already registered.");
    }

    if (newUser.age < 18) {
      throw new Error("This user is too young to register.");
    }

    if (
      !this.registeredUsers.hasOwnProperty(currentUserName) &&
      newUser.age >= 18
    ) {
      this.registeredUsers[currentUserName] = newUser;
    }
    console.log("A new user has been registered.");
    return newUser;
  }

  loginUser(username: string, password: string): boolean {
    const currentUser = this.registeredUsers[username];
    if (!currentUser) {
      throw new Error("The username is incorrect or this user does not exist.");
    }
    if (currentUser.password !== password) {
      throw new Error("Incorrect password.");
    }

    currentUser.login(password);
    return currentUser.loggedIn;
  }

  logoutUser(username: string): boolean {
    const currentUser = this.registeredUsers[username];
    if (!currentUser) {
      throw new Error("No such user is logged in.");
    }

    currentUser.logout();
    console.log("The user has logged out.");

    return currentUser.loggedIn;
  }

  createScooter(station: string): ScooterInterface {
    if (!this.stations.hasOwnProperty(station)) {
      throw new Error("No such station.");
    }

    const newScooter = new Scooter(station);

    this.stations[station].push(newScooter);

    console.log("Created new scooter.");
    return newScooter;
  }

  dockScooter(scooter: ScooterInterface, station: string): void {
    if (!this.stations.hasOwnProperty(station)) {
      throw new Error("No such station.");
    }

    const currentStationArray = this.stations[station];

    currentStationArray.forEach((item) => {
      if (item.serial === scooter.serial) {
        throw new Error("Scooter already at station.");
      }
    });

    scooter.station = station;
    console.log("The scooter is docked.");
  }

  // Locate the given scooter at one of the stations, and remove it from that station. Rent it to the user. Log scooter is rented to the console.
  // If the scooter is already rented, throw the error scooter already rented.
  rentScooter(scooter: ScooterInterface, user: UserInterface): void {
    if (scooter.user !== null) {
      throw new Error("Scooter already rented.");
    }

    if (scooter.station === null) {
      // In interface 'ScooterInterface' - station can be 'string' or 'null'
      // We want to throw an error if it is 'null'
      // This should resolve the Type 'null' cannot be used as an index type error.
      throw new Error("Scooter is not located at any station.");
    }

    const locatedScooterArray = this.stations[scooter.station];

    locatedScooterArray.forEach((scooterEl, index) => {
      if (scooterEl.serial === scooter.serial) {
        locatedScooterArray.splice(index, 1);
      }
    });

    scooter.station = null;
    scooter.user = user;

    console.log("Scooter is rented.");
  }

  print(): void {
    console.log("Stations: ", this.stations);
    console.log("Registered Users: ", this.registeredUsers);
  }
}
// const scooterApp = new ScooterApp();
// scooterApp.registerUser("Joe Bloggs", "test123", 21);
// scooterApp.createScooter("Victoria");
// scooterApp.print();

export default ScooterApp;
