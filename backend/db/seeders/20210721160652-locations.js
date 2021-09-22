'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Locations', [
     {
     userId: 1,
     address: faker.address.streetAddress(),
     name: faker.company.companyName(),
     price: faker.finance.amount(),
     state: faker.address.state(),
     country: faker.address.country(),
     city: faker.address.city(),
     lat: faker.address.latitude(),
     lng: faker.address.longitude(),
     capacity: 40
    },
     {
       userId: 1,
       address: faker.address.streetAddress(),
       name: faker.company.companyName(),
       price: faker.finance.amount(),
       state: faker.address.state(),
       country: faker.address.country(),
       city: faker.address.city(),
       lat: faker.address.latitude(),
       lng: faker.address.longitude(),
       capacity: 30
     },
     {
       userId: 1,
       address: faker.address.streetAddress(),
       name: faker.company.companyName(),
       price: faker.finance.amount(),
       state: faker.address.state(),
       country: faker.address.country(),
       city: faker.address.city(),
       lat: faker.address.latitude(),
       lng: faker.address.longitude(),
       capacity: 90
     },
     {
       userId: 1,
       address: faker.address.streetAddress(),
       name: faker.company.companyName(),
       price: faker.finance.amount(),
       state: faker.address.state(),
       country: faker.address.country(),
       city: faker.address.city(),
       lat: faker.address.latitude(),
       lng: faker.address.longitude(),
       capacity: 80
     },
     {
       userId: 1,
       address: faker.address.streetAddress(),
       name: faker.company.companyName(),
       price: faker.finance.amount(),
       state: faker.address.state(),
       country: faker.address.country(),
       city: faker.address.city(),
       lat: faker.address.latitude(),
       lng: faker.address.longitude(),
       capacity: 10
     },
     {
       userId: 2,
       address: faker.address.streetAddress(),
       name: faker.company.companyName(),
       price: faker.finance.amount(),
       state: faker.address.state(),
       country: faker.address.country(),
       city: faker.address.city(),
       lat: faker.address.latitude(),
       lng: faker.address.longitude(),
       capacity: 40
     },
     {
       userId: 2,
       address: faker.address.streetAddress(),
       name: faker.company.companyName(),
       price: faker.finance.amount(),
       state: faker.address.state(),
       country: faker.address.country(),
       city: faker.address.city(),
       lat: faker.address.latitude(),
       lng: faker.address.longitude(),
       capacity: 20
     },
     {
       userId: 2,
       address: faker.address.streetAddress(),
       name: faker.company.companyName(),
       price: faker.finance.amount(),
       state: faker.address.state(),
       country: faker.address.country(),
       city: faker.address.city(),
       lat: faker.address.latitude(),
       lng: faker.address.longitude(),
       capacity: 40
     },
     {
       userId: 2,
       address: faker.address.streetAddress(),
       name: faker.company.companyName(),
       price: faker.finance.amount(),
       state: faker.address.state(),
       country: faker.address.country(),
       city: faker.address.city(),
       lat: faker.address.latitude(),
       lng: faker.address.longitude(),
       capacity: 45
     },
     {
       userId: 3,
       address: faker.address.streetAddress(),
       name: faker.company.companyName(),
       price: faker.finance.amount(),
       state: faker.address.state(),
       country: faker.address.country(),
       city: faker.address.city(),
       lat: faker.address.latitude(),
       lng: faker.address.longitude(),
       capacity: 35
     },
     //
     {
       userId: 2,
       address: faker.address.streetAddress(),
       name: faker.company.companyName(),
       price: faker.finance.amount(),
       state: faker.address.state(),
       country: faker.address.country(),
       city: faker.address.city(),
       lat: faker.address.latitude(),
       lng: faker.address.longitude(),
       capacity: 40
     },
     {
       userId: 2,
       address: faker.address.streetAddress(),
       name: faker.company.companyName(),
       price: faker.finance.amount(),
       state: faker.address.state(),
       country: faker.address.country(),
       city: faker.address.city(),
       lat: faker.address.latitude(),
       lng: faker.address.longitude(),
       capacity: 40
     },
     {
       userId: 4,
       address: faker.address.streetAddress(),
       name: faker.company.companyName(),
       price: faker.finance.amount(),
       state: faker.address.state(),
       country: faker.address.country(),
       city: faker.address.city(),
       lat: faker.address.latitude(),
       lng: faker.address.longitude(),
       capacity: 40
     },
     {
       userId: 4,
       address: faker.address.streetAddress(),
       name: faker.company.companyName(),
       price: faker.finance.amount(),
       state: faker.address.state(),
       country: faker.address.country(),
       city: faker.address.city(),
       lat: faker.address.latitude(),
       lng: faker.address.longitude(),
       capacity: 40
     },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Locations', null, {});
  }
};
