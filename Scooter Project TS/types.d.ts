export interface UserInterface {
  username: string;
  password: string;
  age: number;
  loggedIn: boolean;
  login(password: string): void;
  logout(): void;
}

/**
In TypeScript (and indeed in most object-oriented programming languages), interfaces are used to describe the shape of an instance of a class, not the class itself. 
Static properties and methods belong to the class, not to instances of the class, so they are not included in the interface.
*/

export interface ScooterInterface {
  station: string | null;
  user: UserInterface | null;
  serial: number;
  charge: number;
  isBroken: boolean;
}

export type StationsType = {
  [key: string]: ScooterInterface[];
};

export type RegisteredUsers = {
  [key: string]: UserInterface;
};

export interface ScooterAppInterface {
  stations: StationsType;
  registeredUsers: RegisteredUsers;
  registerUser(username: string, password: string, age: number): UserInterface;
  loginUser(username: string, password: string): boolean;
  logoutUser(username: string): boolean;
  createScooter(station: string): ScooterInterface;
  dockScooter(scooter: ScooterInterface, station: string): void;
  rentScooter(scooter: ScooterInterface, user: UserInterface): void;
  print(): void;
}
