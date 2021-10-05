const express = require('express');
const asyncHandler = require('express-async-handler');
const { Booking } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
        const bookings = await Booking.findAll();

        return res.json( bookings);

}))

router.post('/new', asyncHandler(async (req, res) => {
        const {locationId, userId, bookingDate} = req.body
        const booking = Booking.create({
                locationId,
                userId,
                bookingDate
        })

        return res.json(booking)
}))

module.exports = router;