// enums are used when we want to have fixed choice and have to select the choice from that 


enum seatDetails{
    aisle, // by default the first value is set to be 0 and the next values are in increment order  
    middle,
    window
} 
// enum seatDetails{
//     aisle = 7, // we can change the order or specify the value we need like , and we can set string also 
//     middle = 3,
//     window = 8 
// } 

const mySeat = seatDetails.aisle;