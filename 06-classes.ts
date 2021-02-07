// Classes
// Class types, including constructor
class User {
  name: string;
  age: number;
  nickName: string;

  constructor(name: string, age: number, nickName: string) {
    this.name = name;
    this.age = age;
    this.nickName = nickName;
  }
}

const roman = new User("Roman", 32, "webDev");

roman; // { name: "Roman", age: 32, nickName: "webDev" }

// Class types modificators
class User {
  public name: string;
  private nickName: string;
  protected age: number;
  readonly pass: number;

  constructor(name: string, age: number, nickName: string, pass: number) {
    this.name = name;
    this.age = age;
    this.nickName = nickName;
    this.pass = pass;
  }
}

const roman = new User("Roman", 32, "webDev", 123);

roman.name; // "Roman"
roman.nickName; // Prop 'nickName' is private and only accessible within class 'User'
roman.age; // Prop 'age' is protected and only accessible within class 'User' and its subclasses
roman.pass = 42; // Cannot assign to 'pass' because it is a read-only property

// Class default properties
class User {
  name: string;
  age: number = 20; // age default property
  nickName: string = "webDev"; // nickName default property

  constructor(name: string) {
    this.name = name;
  }
}

const user = new User("Roman");

user; // { name: "Roman", age: 20, nickName: "webDev" }

// Class default properties (example)
class User {
  name: string;
  age: number = 20; // age default property
  nickName: string = "webDev"; // nickName default property

  constructor(name: string) {
    this.name = name;
  }

  getPass(): string {
    return `${this.nickName}${this.age}`;
  }
}

const user = new User("Roman");

user.getPass(); // "webDev20"

// Minimization of Class properties
class User {
  constructor(
    public name: string,
    public age: number,
    public nickName: string,
    public pass: number
  ) {}
}

// Try to change private property
class User {
  private age: number = 20;

  constructor(public name: string) {}
}

const roman = new User("Roman");

roman.age = 30; // Property 'age' is private and only accessible within class 'User'

// Get access to private property
class User {
  private age: number = 20;

  constructor(public name: string) {}

  setAge(age: number) {
    this.age = age;
  }

  set myAge(age: number) {
    this.age = age;
  }
}
const roman = new User("Roman");

roman.setAge(30); // 30
roman.myAge = 31; // 31