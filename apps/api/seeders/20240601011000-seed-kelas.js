'use strict';

module.exports = {
  async up(queryInterface) {
    const now = new Date();
    await queryInterface.bulkInsert('kelas', [
      {
        id: queryInterface.sequelize.literal('gen_random_uuid()'),
        name: 'X IPA 1',
        grade: 10,
        created_at: now,
        updated_at: now,
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('kelas', { name: 'X IPA 1' });
  },
};
