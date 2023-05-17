const express = require('express');

const bookingController = require('../../Controller/bookingController');

const router = express.Router();


router.get('/booking', bookingController.getAllBookings);

router.post('/booking', bookingController.createBooking )


module.exports = router