const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    id : {
        type : Number,
        required : true,
        unique : true,
    },
    seatNumber : {
        type : Number,
        required : true,
        unique : true,
    },
    status : {
        type : String,
        required : true,
        default : "Empty",
        enum : ["Booked", "Empty"],
    }
}, {timestamps : true});

const Booking  = new mongoose.model("Booking", bookingSchema);

module.exports = Booking;