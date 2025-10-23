'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    const [student] = await queryInterface.sequelize.query(
      "SELECT id FROM siswa WHERE nis = 'SISWA-001' LIMIT 1;",
      { type: Sequelize.QueryTypes.SELECT }
    );

    if (!student) {
      throw new Error('Seed siswa before tagihan');
    }

    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    await queryInterface.bulkInsert('tagihan', [
      {
        id: queryInterface.sequelize.literal('gen_random_uuid()'),
        student_id: student.id,
        month,
        year,
        amount: 250000,
        status: 'BELUM',
        created_at: now,
        updated_at: now,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    const [student] = await queryInterface.sequelize.query(
      "SELECT id FROM siswa WHERE nis = 'SISWA-001' LIMIT 1;",
      { type: Sequelize.QueryTypes.SELECT }
    );

    if (!student) {
      return;
    }

    await queryInterface.bulkDelete('tagihan', {
      student_id: student.id,
    });
  },
};
