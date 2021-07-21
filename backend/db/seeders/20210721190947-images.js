'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Images', [
     {
     locationId: 1,
     url: faker.image.imageUrl()
    },
     {
       locationId: 1,
       url: faker.image.imageUrl()
     },
     {
       locationId: 1,
       url: faker.image.imageUrl()
     },
     {
       locationId: 2,
       url: faker.image.imageUrl()
     },
     {
       locationId: 2,
       url: faker.image.imageUrl()
     },
     {
       locationId: 2,
       url: faker.image.imageUrl()
     },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Images', null, {});
  }
};
