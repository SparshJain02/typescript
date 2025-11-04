type User = {
    name: string, 
    email: string, 
    contact?:number // this "?" means the field is optional 
}

const userDetails: User = {name: "Sparsh",email: "adam@gmail.com"}

// here i didn't defined contact and it didn't thrown error
