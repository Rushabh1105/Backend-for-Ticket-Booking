const Booking = require('../Models/Booking');


const updateSeat = async (num) => {
    if(num > 7){
        return {
            message : 'Booking not allowed for more than 7 persons'
        }
    }
    try {
        const seats = new Array();
        const seat =await Booking.findOne({status : 'Empty'});
        let remainingSeats = 81-seat.id;
        id = seat.id;

        for(i=1; i<=num; i++){
            const s = await Booking.findOneAndUpdate({id : id}, {status : 'Booked'});
            seats.push(s);
            id++;
        }

        const response = await Booking.find();
        return response;

    } catch (error) {
        console.log(error);
        return error
    }
}

const getAllBookings = async () => {
    try {
        const response = await Booking.find();
        return response;
    } catch (error) {
        console.log(error);
        return error
    }
}


module.exports = {
    updateSeat,
    getAllBookings,
}