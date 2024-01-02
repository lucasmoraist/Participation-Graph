'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        first_name: 'Carlos',
        last_name: 'Moura',
        participation: 0.05,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Fernanda',
        last_name: 'Oliveira',
        participation: 0.15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Hugo',
        last_name: 'Silva',
        participation: 0.2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Eliza',
        last_name: 'Souza',
        participation: 0.2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        first_name: 'Anderson',
        last_name: 'Santos',
        participation: 0.4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
