// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const locationRouter = require('./locations');
const imageRouter = require('./images');


router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/locations', locationRouter);

router.use('/images', imageRouter);



module.exports = router;