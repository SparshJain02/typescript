// this is what we have learned earlier 
interface User {
    name: string;
    email: string,
    total_post: number
}

// but we can reopen interface 
// this is useful because we don't have to rewrite our main User there are useCases when you have to reopen interfaces like below
interface User{
    newPostCount: number
}

const user1:User = {
    name: "Sparsh",
    email: "adam@gmail.com",
    total_post: 33,
    newPostCount: 2 
}

// there are more to interface like we can use inheritance
// for eg: 

interface Admin extends User{
    // so this will have all the properties of User as well it can have it's own properties
    _id: string | number;
    password: string
}
const admin1: Admin = {
    _id: "#22323",
    password: "admin is lazy",
    ...user1
}