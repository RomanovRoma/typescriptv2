// Functions
// Arguments type
const createPassword = (name: string, age: number | string) => `${name}${age}`;

createPassword("Jack", 31); // 'Jack31'
createPassword("Jack", "31"); // 'Jack31'

// Defailt Arguments
const createPassword = (name: string = "Max", age: number | string = 20) =>
  `${name}${age}`;

createPassword(); // "Max20"

// Call function with wrong argument
/*
    Error:
    Argument of type 'null' is not assignable to parameter of type 'string | undefined'
*/
createPassword(null);

// Function with two required arguments
const createPassword = (name: string, age: number): string => `${name}${age}`;

// Call function with one argument
createPassword("Jack"); // 'An argument for 'age' was not provided.'

// Function with optional argument 'age'
const createPassword = (name: string, age?: number) => `${name}${age}`;

// REST
const createSkills = (name, ...skills) =>
  `${name}, my skills are ${skills.join()}`;

// REST type
const createSkills = (name: string, ...skills: Array<string>) =>
  `${name}, my skills are ${skills.join()}`;

// Call function with REST arguments
createSkills("Jack", "JS", "ES6", "React"); // "Jack, my skills are JS, ES6, React"

// Returned type is string
const createPassword = (name: string, age: number | string): string =>
  `${name}${age}`;

// Returned type is number
const sum = (first: number, second: number): number => first + second;

// Returned type is object
const createEmptyObject = (): object => ({});

// Void
const greetUser: void = () => {
  alert("Hello, nice to see you!");
};

// Never Type
// Function return Error
const msg = "Hello";
const error = (msg: string): never => {
  throw new Error(msg);
};

// Function infinite loop
const infiniteLoop = (): never => {
  while (true) {}
};

// Function variable type
let myFunc;

function oldFunc(name: string): void {
  alert(`Hello ${name}, nice to see you!`);
}

myFunc = oldFunc;

// Describe function type
let myFunc: (firstArg: string) => void;

function oldFunc(name: string): void {
  alert(`Hello ${name}, nice to see you!`);
}

myFunc = oldFunc;
