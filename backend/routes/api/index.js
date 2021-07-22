// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const locationRouter = require('./locations');


router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/locations', locationRouter);



module.exports = router;