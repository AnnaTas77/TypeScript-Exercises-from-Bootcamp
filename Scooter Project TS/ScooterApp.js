"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Scooter_1 = require("./Scooter");
var User_1 = require("./User");
var ScooterApp = /** @class */ (function () {
    function ScooterApp() {
        this.stations = {
            "Battersea Power Station": [],
            "London Bridge": [],
            Victoria: [],
            Piccadilly: [],
            Richmond: [],
        };
        this.registeredUsers = {};
    }
    ScooterApp.prototype.registerUser = function (username, password, age) {
        var newUser = new User_1.default(username, password, age);
        var currentUserName = newUser.username;
        if (this.registeredUsers.hasOwnProperty(currentUserName)) {
            throw new Error("This user is already registered.");
        }
        if (newUser.age < 18) {
            throw new Error("This user is too young to register.");
        }
        if (!this.registeredUsers.hasOwnProperty(currentUserName) &&
            newUser.age >= 18) {
            this.registeredUsers[currentUserName] = newUser;
        }
        console.log("A new user has been registered.");
        return newUser;
    };
    ScooterApp.prototype.loginUser = function (username, password) {
        var currentUser = this.registeredUsers[username];
        if (!currentUser) {
            throw new Error("The username is incorrect or this user does not exist.");
        }
        if (currentUser.password !== password) {
            throw new Error("Incorrect password.");
        }
        currentUser.login(password);
        return currentUser.loggedIn;
    };
    ScooterApp.prototype.logoutUser = function (username) {
        var currentUser = this.registeredUsers[username];
        if (!currentUser) {
            throw new Error("No such user is logged in.");
        }
        currentUser.logout();
        console.log("The user has logged out.");
        return currentUser.loggedIn;
    };
    ScooterApp.prototype.createScooter = function (station) {
        if (!this.stations.hasOwnProperty(station)) {
            throw new Error("No such station.");
        }
        var newScooter = new Scooter_1.default(station);
        this.stations[station].push(newScooter);
        console.log("Created new scooter.");
        return newScooter;
    };
    ScooterApp.prototype.dockScooter = function (scooter, station) {
        if (!this.stations.hasOwnProperty(station)) {
            throw new Error("No such station.");
        }
        var currentStationArray = this.stations[station];
        currentStationArray.forEach(function (item) {
            if (item.serial === scooter.serial) {
                throw new Error("Scooter already at station.");
            }
        });
        scooter.station = station;
        console.log("The scooter is docked.");
    };
    // Locate the given scooter at one of the stations, and remove it from that station. Rent it to the user. Log scooter is rented to the console.
    // If the scooter is already rented, throw the error scooter already rented.
    ScooterApp.prototype.rentScooter = function (scooter, user) {
        if (scooter.user !== null) {
            throw new Error("Scooter already rented.");
        }
        if (scooter.station === null) {
            // In interface 'ScooterInterface' - station can be 'string' or 'null'
            // We want to throw an error if it is 'null'
            // This should resolve the Type 'null' cannot be used as an index type error.
            throw new Error("Scooter is not located at any station.");
        }
        var locatedScooterArray = this.stations[scooter.station];
        locatedScooterArray.forEach(function (scooterEl, index) {
            if (scooterEl.serial === scooter.serial) {
                locatedScooterArray.splice(index, 1);
            }
        });
        scooter.station = null;
        scooter.user = user;
        console.log("Scooter is rented.");
    };
    ScooterApp.prototype.print = function () {
        console.log("Stations: ", this.stations);
        console.log("Registered Users: ", this.registeredUsers);
    };
    return ScooterApp;
}());
// const scooterApp = new ScooterApp();
// scooterApp.registerUser("Joe Bloggs", "test123", 21);
// scooterApp.createScooter("Victoria");
// scooterApp.print();
exports.default = ScooterApp;
