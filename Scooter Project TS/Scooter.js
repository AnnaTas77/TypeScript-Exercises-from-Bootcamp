"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Scooter = /** @class */ (function () {
    function Scooter(station, charge) {
        this.charge = 100;
        this.isBroken = false;
        this.station = station;
        this.user = null;
        this.serial = Scooter.nextSerial;
        Scooter.nextSerial++;
        if (charge !== undefined) {
            this.charge = charge;
        }
        // The initialization of 'isBroken' is not needed here since it's already initialized in the class field.
    }
    Scooter.prototype.rent = function (user) {
        if (this.charge < 20) {
            throw new Error("The scooter needs to charge.");
        }
        if (this.isBroken) {
            throw new Error("The scooter needs repair.");
        }
        if (this.charge > 20 && !this.isBroken) {
            this.station = null;
            this.user = user;
        }
    };
    Scooter.prototype.dock = function (station) {
        this.station = station;
        this.user = null;
    };
    Scooter.nextSerial = 1;
    return Scooter;
}());
exports.default = Scooter;
