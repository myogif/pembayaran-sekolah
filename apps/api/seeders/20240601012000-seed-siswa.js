'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    const [kelas] = await queryInterface.sequelize.query(
      "SELECT id FROM kelas WHERE name = 'X IPA 1' LIMIT 1;",
      { type: Sequelize.QueryTypes.SELECT }
    );

    if (!kelas) {
      throw new Error('Seed kelas before siswa');
    }

    await queryInterface.bulkInsert('siswa', [
      {
        id: queryInterface.sequelize.literal('gen_random_uuid()'),
        nis: 'SISWA-001',
        name: 'Budi Santoso',
        class_id: kelas.id,
        year: new Date().getFullYear(),
        address: 'Jl. Merdeka No. 1',
        parent: 'Sutrisno',
        created_at: now,
        updated_at: now,
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('siswa', { nis: 'SISWA-001' });
  },
};
