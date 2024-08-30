interface UserInterface {
  username: string;
  password: string;
  age: number;
  loggedIn: boolean;
}
// no need to declare an Interface for every Class

class User implements UserInterface {
  username: string;
  password: string;
  age: number;
  loggedIn: boolean;

  constructor(username:string, password:string, age: number) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }

  login(password: string) {
    if (password === this.password) {
      this.loggedIn = true;
    } else {
      throw new Error("Incorrect password.");
    }
  }
  logout() {
    this.loggedIn = false;
  }
}

module.exports = User;
