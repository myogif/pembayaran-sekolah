'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tagihan', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('gen_random_uuid()'),
      },
      student_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'siswa',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      month: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('BELUM', 'LUNAS', 'TUNDA'),
        allowNull: false,
        defaultValue: 'BELUM',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
    await queryInterface.addConstraint('tagihan', {
      fields: ['student_id', 'month', 'year'],
      type: 'unique',
      name: 'tagihan_student_month_year_unique',
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('tagihan');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_tagihan_status";');
  },
};
