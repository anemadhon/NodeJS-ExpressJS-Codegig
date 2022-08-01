'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Gigs', [
        {
            title: 'Flutter Developer',
            technologies: 'Flutter',
            budget: 10000,
            description: 'description',
            email: 'ane@me.com',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            title: 'Senior Flutter Developer',
            technologies: 'Flutter',
            budget: 10000,
            description: 'description',
            email: 'ane@me.com',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            title: 'Flutter Developer - Intern',
            technologies: 'Flutter',
            budget: 10000,
            description: 'description',
            email: 'ane@me.com',
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Gigs', null, {})
  }
};
