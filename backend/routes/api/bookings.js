const express = require('express');
const asyncHandler = require('express-async-handler');
const { Booking } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
        const bookings = await Booking.findAll();

        return res.json( bookings);

}))

module.exports = router;