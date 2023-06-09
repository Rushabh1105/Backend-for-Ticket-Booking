const bookingServiece = require('../Serviece/bookingServiece');


const createBooking = async(req, res) => {
    try {
        const response = await bookingServiece.updateSeat(req.body.seats);
        return res.json({
            status : 200,
            success : true,
            message : "created booking",
            data : response,
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "cannot create",
        })
    }
}

const getAllBookings = async (req, res) => {
    try {
        const response = await bookingServiece.getAllBookings();
        return res.json({
            status : 200,
            success : true,
            message : "created booking",
            data : response,
        })
    } catch (error) {
        console.log(err);
        return res.json({
            status : 500,
            success : false,
            message : "cannot fetch",
        })
    }
}

module.exports = {
    createBooking,
    getAllBookings,
}