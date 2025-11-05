"use strict";
// classes 
Object.defineProperty(exports, "__esModule", { value: true });
// this is classic way and proffesionals use this 
class User {
    name;
    email;
    // to have private variables you can use
    info;
    // by default all the variables are public 
    cast;
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.info = "user signed";
        this.cast = "jain";
    }
}
const user1 = new User("Sparsh", "adam@gmail.com");
// console.log(user1.info); // going to throw error because info is private and can be accessed only inside the class 
// normal method
class User1 {
    // i have defined email and name here because this.email and this.name is undefiend to typescript they don't know what this.x means 
    // if you try to write like this.email:string it will say what ddo you mean by this.email??
    email;
    name;
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
//# sourceMappingURL=index.js.map