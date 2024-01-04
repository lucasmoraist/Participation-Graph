'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Carlos',
        lastName: 'Moura',
        participation: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Fernanda',
        lastName: 'Oliveira',
        participation: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Hugo',
        lastName: 'Silva',
        participation: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Eliza',
        lastName: 'Souza',
        participation: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        firstName: 'Anderson',
        lastName: 'Santos',
        participation: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
