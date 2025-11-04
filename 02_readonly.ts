type User = {
    readonly _id: string,
    name: string, 
    email: string,
    contact: number
};

const userDetails:User = {_id: "abbe",name: "Sparsh",email: "sparstherock10@gmail.com",contact: 9999}

userDetails.email = "adam@gmail.com"; // no error 
userDetails.contact = 1123; // no error
// userDetails._id =  "4435" // error because it was readonly , once submitted can't change the value


export {}