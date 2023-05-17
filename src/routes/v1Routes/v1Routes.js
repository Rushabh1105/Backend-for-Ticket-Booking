const express = require('express');

const bookingController = require('../../Controller/bookingController');

const router = express.Router();


router.get('/booking', (req, res) => {
    res.json({
        message : 'hello there',
    })
});

router.post('/booking', bookingController.createBooking )


module.exports = router