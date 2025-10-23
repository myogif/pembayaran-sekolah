'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('settings', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('gen_random_uuid()'),
      },
      school_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      logo_path: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      receipt_header: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      receipt_footer: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      active_year: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      active_semester: {
        type: Sequelize.INTEGER,
        allowNull: true,
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
  },
  async down(queryInterface) {
    await queryInterface.dropTable('settings');
  },
};
