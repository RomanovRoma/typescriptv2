// Example of using 'any'
const getter = (data: any): any => data;

getter(10); // 10
getter("test"); // "test"

// Issue we have
const getter = (data: any): any => data;

getter(10).length; // undefined
getter("test").length; // 4

// Using of generic type
// ES6 syntax
const getter = <T>(data: T): T => data;

// ES5 syntax
function getter<T>(data: T): T {
  return data;
}

// Defining issue immedialy
const getter = <T>(data: T): T => data;

getter(10).length; // Property 'length' does not exist on type '10'
getter("test").length; // 4

// Generic behavior explanation
// For a number
const getter = (data: number): number => data;
getter(10).length; // Property 'length' does not exist on type '10'

// For a string
const getter = (data: string): string => data;
getter("test").length; // 4

// Function arguments type
const getter = <T>(data: T): T => data;

// Define type in function calling
getter<number>(10).length; // Property 'length' does not exist on type '10'
getter<string>("test").length; // 4

// Array generic type
const list: Array<number> = [1, 2, 3];

// Simple class example
class User {
  constructor(public name: string, public age: number) {}

  public getPass(): string {
    return `${this.name}${this.age}`;
  }
}

// Generic class
class User<T> {
  constructor(public name: T, public age: T) {}

  public getPass(): string {
    return `${this.name}${this.age}`;
  }
}

const roman = new User("Roman", "32");
const max = new User(123, 321);

roman.getter(); // "Roman32"
max.getPass(); // "123321"

// Multiple generic class
class User<T, K> {
  constructor(public name: T, public age: K) {}

  public getPass(): string {
    return `${this.name}${this.age}`;
  }
}

const roman = new User("Roman", "32"); // string, string
const max = new User(123, 321); // number, number
const leo = new User("Leo", 22); // string, number

roman.getter(); // "Roman32"
max.getPass(); // "123321"
leo.getPass(); // "Leo22"

// New class method 'getSecret'
class User<T, K> {
  constructor(public name: T, public age: K) {}

  public getPass(): string {
    return `${this.name}${this.age}`;
  }

  public getSecret(): number {
    return this.age ** 2; // <--- "age" must be a number
  }
}

// Specify generic type 'K' with key-word 'extends'
class User<T, K extends number> {
  constructor(public name: T, public age: K) {}

  public getPass(): string {
    return `${this.name}${this.age}`;
  }

  public getSecret(): number {
    return this.age ** 2;
  }
}

const roman = new User("Roman", 32);
const leo = new User(123, 321);

/*
    Error:
    Argument of type '"20"' is not assignable to parameter of type 'number'
*/
const max = new User("Max", "20");