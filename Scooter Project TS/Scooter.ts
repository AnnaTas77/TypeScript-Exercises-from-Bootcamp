import { UserInterface, ScooterInterface } from "./types";

class Scooter implements ScooterInterface {
  static nextSerial: number = 1;
  station: string | null;
  user: UserInterface | null;
  serial: number;
  charge: number = 100;
  isBroken: boolean = false;

  constructor(station: string, charge?: number) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial;
    Scooter.nextSerial++;
    if (charge !== undefined) {
      this.charge = charge;
    }
    // The initialization of 'isBroken' is not needed here since it's already initialized in the class field.
  }

  rent(user: UserInterface): void {
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
  }

  dock(station: string): void {
    this.station = station;
    this.user = null;
  }

  // BONUS
  // recharge() {}
  // requestRepair() {}
}

export default Scooter;
