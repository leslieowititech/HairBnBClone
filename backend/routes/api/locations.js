const express = require('express');
const asyncHandler = require('express-async-handler');
const { Location } = require('../../db/models/location');

const router = express.Router();

router.get('/', asyncHandler( async (req,res) => {
    const loactions = await Location.findPlaces();

    return loactions;
}))