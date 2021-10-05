const express = require('express');
const asyncHandler = require('express-async-handler');
const { Location, Image } = require('../../db/models');
const faker = require('faker');
const csrf = require('csurf');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const csrfProtection = csrf({ cookie: true });


const router = express.Router();

const validateAddSpot = [
    check('name')
        .exists({ checkFalsy: true })
        .isLength({ min: 1 })
        .withMessage('Enter at least one character for the name'),
    check('price')
        .exists({ checkFalsy: true })
        .withMessage('Price cannot be empty'),
    handleValidationErrors,

]

router.get('/', asyncHandler( async (req,res) => {
    const locations = await Location.findAll();
    // const images = await Image.findAll();    
    // console.log(locations, 'locationshere')

    return res.json(
        locations  
       );
}));

router.get('/:state/:id', asyncHandler( async (req, res) => {//id matching
    const {id} = req.params
    const location = await Location.findOne({ where: { id: id} })
    
    return res.json(
         [location]
    )
    // return req
}))

router.put('/:state/;id')


router.delete('/:state/:id(\\d+)', asyncHandler(async(req, res) => {//delete a location
    const {id} = req.params
    const location = await Location.findOne({ where: {id: id}})
    await location.destroy()
    
}))

router.get('/:state', asyncHandler(async (req,res) => {//state matching
   
    const {state} = req.params
  
    const locations = await Location.findAll({
        where: {state: state}
    })  
    // console.log(locations)

    return res.json(
        locations
    )
}))

router.post('/new', csrfProtection, validateAddSpot,  asyncHandler(async (req, res) => {
    const {name, address, price, state, country, city, userId, capacity} = req.body;
    const location = await Location.create({
        name,
        address,
        price,
        state,
        country,
        userId,
        city,
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        capacity
    })

   

    return res.json(
        location
    )
}))

module.exports = router;