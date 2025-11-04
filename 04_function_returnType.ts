type UserDetails = {
    name: string,
    email: string
}


// i want the return type should be object 

// first way

function userobj1(u:UserDetails):{}{ // :{} this states the return type should be object no matter what credentials are inside object but it should be object 

    return {

    }
}

function userobj2(u:UserDetails):UserDetails{ // here i explicitly said that return type should be same as userDetails type which was an object with fixed credentails 
    return{
        name: "Sparsh",
        email: "ajay@gmail.com"
    }
}