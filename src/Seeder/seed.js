const Booking = require("../Models/Booking");
const mongoose = require('mongoose');

const seed =async () => {

    await Booking.deleteMany({});

    let arr = [7,6,5,4,3,2,1,8,9,10,11,12,13,14,21,20,19,18,17,16,15,
        22,23,24,25,26,27,28,35,34,33,32,31,30,29,36,37,38,39,40,41,42,
        49,48,47,46,45,44,43,50,51,52,53,54,55,56,63,62,61,60,59,58,57,
        64,65,66,67,68,69,70,77,76,75,74,73,72,71,78,79,80
    ];
    
    
    
    for(let i=1; i<=80; i++){
        const seat = await Booking.create({
            id : i,
            seatNumber : arr[i-1],
            status : 'Empty',
        })
    }
}

module.exports = {
    seed,
}