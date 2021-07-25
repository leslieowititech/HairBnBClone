const express = require('express');
const asyncHandler = require('express-async-handler');
const { Location } = require('../../db/models');
// const {Image} = require('../../db/models')

const router = express.Router();

router.get('/', asyncHandler( async (req,res) => {
    const locations = await Location.findAll();
    // const images = await Image.findAll();    
    

    return res.json(
        locations  
       );
}));

router.get('/:id', asyncHandler( async (req, res) => {
    const {id } = req.body;
    const location = await Location.findOne({ where: { id: id} })

    return res.json(
        location
    )
}))

// router.get('/state', asyncHandler(async (req,res) => {
//     console.log(req.body)
// }))

module.exports = router;