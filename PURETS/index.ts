// classes 

// this is classic way and proffesionals use this 
class User {
    // to have private variables you can use
    private info: string;
    // by default all the variables are public 
    cast:string;

    constructor(public name:string, public email: string ){
        this.info = "user signed"
        this.cast = "jain"
    }
}

const user1 = new  User("Sparsh","adam@gmail.com");
// console.log(user1.info); // going to throw error because info is private and can be accessed only inside the class 

// normal method
class User1{
    // i have defined email and name here because this.email and this.name is undefiend to typescript they don't know what this.x means 

    // if you try to write like this.email:string it will say what ddo you mean by this.email??

    email: string;
    name: string;
    constructor(email:string,name:string){
        this.email = email;
        this.name = name;
    }

}