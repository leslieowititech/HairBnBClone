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
     },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
