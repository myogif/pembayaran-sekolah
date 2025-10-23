'use strict';

const bcrypt = require('bcrypt');
const { Op } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    const now = new Date();
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: queryInterface.sequelize.literal('gen_random_uuid()'),
          name: 'Super Admin',
          email: 'admin@example.com',
          password_hash: await bcrypt.hash('Admin123!', 10),
          role: 'super_admin',
          active: true,
          created_at: now,
          updated_at: now,
        },
        {
          id: queryInterface.sequelize.literal('gen_random_uuid()'),
          name: 'Staff Operator',
          email: 'staff@example.com',
          password_hash: await bcrypt.hash('Staff123!', 10),
          role: 'staff',
          active: true,
          created_at: now,
          updated_at: now,
        },
      ]
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', {
      email: {
        [Op.in]: ['admin@example.com', 'staff@example.com'],
      },
    });
  },
};
