"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(username, password, age) {
        this.username = username;
        this.password = password;
        this.age = age;
        this.loggedIn = false;
    }
    User.prototype.login = function (password) {
        if (password === this.password) {
            this.loggedIn = true;
        }
        else {
            throw new Error("Incorrect password.");
        }
    };
    User.prototype.logout = function () {
        this.loggedIn = false;
    };
    return User;
}());
exports.default = User;
