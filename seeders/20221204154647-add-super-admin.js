'use strict';

const { ROLES } = require('../lib/const');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Fachrul',
          email: 'fachrul@example.com',
          password: 'example12345',
          role: ROLES.SUPERADMIN,
          createdAt: new Date().getTime(),
          UpdatedAt: new Date().getTime(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
