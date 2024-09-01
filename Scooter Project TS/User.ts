import { UserInterface } from "./types";

class User implements UserInterface {
  username: string;
  password: string;
  age: number;
  loggedIn: boolean;

  constructor(username: string, password: string, age: number) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }

  login(password: string): void {
    if (password === this.password) {
      this.loggedIn = true;
    } else {
      throw new Error("Incorrect password.");
    }
  }
  logout(): void {
    this.loggedIn = false;
  }
}

export default User;
