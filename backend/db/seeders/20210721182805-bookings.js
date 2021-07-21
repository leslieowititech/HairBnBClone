'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Bookings', [
     {
        locationId: 1,
        userId: 1,
        bookingDate: new Date()
     },
     {
       locationId: 5,
       userId: 1,
       bookingDate: new Date()
     },
     {
       locationId: 3,
       userId: 3,
       bookingDate: new Date()
     },
     {
       locationId: 10,
       userId: 3,
       bookingDate: new Date()
     }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Bookings', null, {});
  }
};
