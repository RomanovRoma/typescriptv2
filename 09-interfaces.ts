// Interface & Type
interface User {
    name: string,
    age: number
}

type User {
    name: string,
    age: number
}

// Create object based on Interface
interface User {
    name: string,
    age: number
}

const roman: User = {
    name: 'Roman',
    age: 32
}

// Interface optional property
interface User {
    name: string,
    age?: number        <--- Optional
}

// Creation with a required property
const roman: User = {
    name: 'Roman'
}

// Creation with missing property
/*
    Error:
    Property 'name' is missing in type '{ age: number }' but required in type 'User'
*/
const max: User = {
    age: 20
}


// Unterface 'readonly' modifier
interface User {
    readonly name: string,      // <--- Can't be changed
    age: number
}

const roman: User = {
    name: 'Roman',
    age: 32
}

roman.age = 30
roman.name = 'Max'      // Cannot assign to 'name' because it is a read-only property


// Compare interface type and object
interface User {
    name: string,
    age: number
}

const roman: User = {
    name: 'Roman',
    age: 32
    /*
        Error:
        Object literal may only specify known properties, and 'nickName' does not exist in type 'User'
    */
    nickName: 'webDev'      // <--- Didn't described in interface "User"
}


// Interface extension
interface User {
    name: string,
    age: number,
    [propName: string]: any
}

const roman: User = {
    name: 'Roman',
    age: 31,
    nickName: 'webDev',         // Interface don't control this property
    justTest: 'test'            // Interface don't control this property
}


// Class Interface
interface User {
    name: string,
    age: number,
    getPass(): string
}

// Class creation based on interface "User"
class Roman implements User {
    name: string = "Roman"
    age: number = 32
    nickName: string = 'webDev'     // <--- Not in interface

    getPass() {
        return `${this.name}${this.age}`
    }
}


// Create Class based on multiple interfaces
interface User {
    name: string,
    age: number,
}

// Separate interface with one method
interface Pass {
    getPass(): string
}

class Roman implements User, Pass {
    name: string = 'Roman',
    age: number = 31

    getPass() {
        return `${this.name}${this.age}`
    }
}


// Interface extends
interface User {
    name: string,
    age: number,
}

// Interface extends
interface Admin extends User {
    getPass(): string
}

class Roman implements Admin {
    name: string = 'Roman'
    age: number = 32

    getPass() {
        return `${this.name}${this.age}`
    }
}