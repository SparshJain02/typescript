type cardNum = {
    cardnumber: string
}
type cardDate = {
    cardate: string
}

// & operator combines 
type cardDetails = cardNum & cardDate & {
    cvv: number
}

// it will look like: 
// cardDetails = {
//     cardnumber: string,
//     carddate: string,
//     cvv: number
// }