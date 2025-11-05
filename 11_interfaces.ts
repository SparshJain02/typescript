// interfaces are outer structure which defines the rules but don't care about what logic you are going to implement 

interface discount {

    // 2 ways to define a method 2nd one is short andd easy to understand
    off: ()=>string
    // off(): string,
    wednesdayOff(coupounName:string,value:number):number
}

const myDiscount:discount = {
    off: function off(){
        return "90"
    },
    // without passing arguments in wednesday off it's not showing any red swiggy lines idk why
    wednesdayOff: (name: "Sparsh", value: 75)=>{
        return 25
    }
    
}

// right now i am not able to differentiate between type and interfaces but i have checked they are working same
// type discount = {
//     off(): string,
//     wednesdayOff(coupounName:string,value:number):number
// }

// const myDiscount:discount = {
//     off: ()=>{
//         return "100%"
//     },
//     wednesdayOff(name: "wednesday", off: 75) {
//         return 25
//     },
// }