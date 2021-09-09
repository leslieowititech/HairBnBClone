const express = require('express');
const asyncHandler = require('express-async-handler');
const { Location } = require('../../db/models');

// const {Image} = require('../../db/models')

const router = express.Router();

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

router.post('/new', asyncHandler(async (req, res) => {
    const {} = req.body;
    const location = Location.create({})

    return res.json(
        location
    )
}))

module.exports = router;