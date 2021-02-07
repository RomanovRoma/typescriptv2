// Objects
// Simple object example
let user = {
  name: "Roman",
  age: 30,
};

// Object type using any
let user: any = {
  name: "Roman",
  age: 30,
};

user = "test"; // Now type of user is string

// Define object type
let user: { name: string; age: number } = {
  name: "Roman",
  age: 30,
};

user = "test"; // Type '"test"' is not assignable to type '{ name: string, age: number }'

// Updating object type
let user: { name: string; age: number; nickName: string } = {
  name: "Yaumen",
  age: 30,
  nickName: "webDev", // No error for described type
};

// 2 object with the same types
let user: { name: string; age: number; nickName: string } = {
  name: "Yaumen",
  age: 30,
  nickName: "webDev",
};

let admin: { name: string; age: number; nickName: string } = {
  name: "Max",
  age: 20,
  nickName: "Mad",
};

// Using Type for objects structure
type Person = { name: string; age: number; nickName: string };

// Apply Person type for objects with the same structure
let user: Person = {
  name: "Yaumen",
  age: 30,
  nickName: "webDev",
};

let admin: Person = {
  name: "Max",
  age: 20,
  nickName: "Mad",
};

// 2 objects with almost the same structure
let user: Person = {
  name: "Yaumen",
  age: 30,
  nickName: "webDev", // <--- property
};

let admin: Person = {
  name: "Max",
  age: 20,
  getPass(): string {
    // <--- new method
    return `${this.name}${this.age}`;
  },
};

// Updating type with optional properties
type Person = {
  name: string;
  age: number;
  nickName?: string;
  getPass?: () => string;
};