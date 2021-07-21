'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Reviews', [
     {
     locationId: 1,
     userId: 1,
     review: faker.lorem.paragraph({sentenceCount: 2})
     },
     {
       locationId: 1,
       userId: 1,
       review: faker.lorem.paragraph({ sentenceCount: 2 })
     },
     {
       locationId: 1,
       userId: 2,
       review: faker.lorem.paragraph({ sentenceCount: 3 })
     },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Reviews', null, {});
  }
};
