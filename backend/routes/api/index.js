// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const locationRouter = require('./locations');
const imageRouter = require('./images');
const bookingsRouter = require('./bookings');


router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/locations', locationRouter);

router.use('/images', imageRouter);

router.use('/bookings', bookingsRouter);



module.exports = router;