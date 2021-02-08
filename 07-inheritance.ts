// Simple Class example
class User {
  constructor(public name: string, public age: number) {}
}

const roman = new User("Roman", 32);

roman; // { name: 'Roman', age: 31 }

// Class with static property
class User {
  static secret = 12345; // static property

  constructor(public name: string, public age: number) {}
}

// Example of call static property
User.secret;

// Call static property in class method
class User {
  static secret = 12345;

  constructor(public name: string, public age: number) {}

  getPass(): string {
    return `${this.name}${User.secret}`;
  }
}

const roman = new User("Roman", 32);

roman.getPass(); // "Roman12345"

// Compiled code
("use strict");
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getPass() {
    return this.name + User.secret;
  }
}
User.secret = 12345;

// Class example
class User {
  private nickName: string = "webDev";
  static secret = 12345;

  constructor(public name: string, public age: number) {}

  getPass(): string {
    return `${this.name}${User.secret}`;
  }
}

// Inheritance example
class Roman extends User {
  name: string = "Roman";
}

// Create instances based on 'User' and 'Roman' classes
const max = new User("Max", 20);
const roman = new Roman(31); // Expected 2 arguments, but got 1

// Realization of constructor in the inherited class
class Roman extends User {
  name: string = "Roman";

  constructor(age: number) {
    super(name, age);
  }
}

// No error
// Create instances based on 'User' and 'Roman' classes
const max = new User("Max", 20);
const roman = new Roman(31);

// Personal method in inherited class
class Roman extends User {
  name: string = "Roman";

  constructor(age: number) {
    super(name, age);
  }

  getPass(): string {
    return `${this.age}${this.name}${this.secret}`;
  }
}

const roman = new Roman(31);

roman.getPass(); // "31Roman12345"

// Abstract class example

abstract class User {
  constructor(public name: string, public age: number) {}

  greet(): void {
    console.log(this.name);
  }

  abstract getPass(): string;
}

const max = new User("Max", 20); // Cannot create an instance of an abstract class

// Realization of "getPass" method
class Roman extends User {
  name: string = "Roman";

  constructor(age: number) {
    super(name, age);
  }

  getPass(): string {
    return `${this.age}${this.name}`;
  }
}

// Call prototype method
roman.greet(); // "Roman"
// Call personal method
roman.getPass(); // "31Roman"
