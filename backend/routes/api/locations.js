const express = require("express");
const asyncHandler = require("express-async-handler");
const { Location, Image } = require("../../db/models");
//onst faker = require("faker");
const { faker } = require("@faker-js/faker");
const csrf = require("csurf");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const csrfProtection = csrf({ cookie: true });

const router = express.Router();

const validateAddSpot = [
  check("name")
    .exists({ checkFalsy: true })
    .withMessage("Enter at least one character for the name"),
  check("price")
    .exists({ checkFalsy: true })
    .withMessage("Price cannot be empty"),
  handleValidationErrors,
];

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const locations = await Location.findAll({ include: Image });
    return res.json(locations);
  })
);

router.get(
  "/:state/:id",
  asyncHandler(async (req, res) => {
    //id matching
    const { id } = req.params;
    const location = await Location.findOne({ where: { id: id } });

    return res.json([location]);
    // return req
  })
);

router.put("/:state/;id");

router.delete(
  "/:state/:id",
  asyncHandler(async (req, res) => {
    //delete a location
    const { id } = req.params;
    const location = await Location.findOne({
      where: { id: id },
      include: {
        model: Image,
        where: {
          locationId: id,
        },
      },
    });
    await location.destroy();

    return res.json("Location deleted");
  })
);

router.get(
  "/:state",
  asyncHandler(async (req, res) => {
    //state matching

    const { state } = req.params;

    const locations = await Location.findAll({
      where: { state: state },
      include: Image,
    });
    // console.log(locations)

    return res.json(locations);
  })
);

router.post(
  "/new",
  csrfProtection,
  validateAddSpot,
  asyncHandler(async (req, res) => {
    const {
      name,
      address,
      price,
      state,
      country,
      city,
      userId,
      capacity,
      url,
    } = req.body;
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
      capacity,
    });

    const image = await Image.create({
      url,
      locationId: location.id,
    });

    await image.save();
    await location.save();

    return res.json(location);
  })
);

router.put(
  "/locations/:state/:id",
  csrfProtection,
  asyncHandler(async (req, res) => {
    // const {state, id} = req.params;
    const {
      name,
      address,
      price,
      state,
      country,
      city,
      userId,
      capacity,
      url,
    } = req.body;

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
      capacity,
    });

    const image = await Image.create({
      url,
      locationId: location.id,
    });
  })
);

module.exports = router;
