'use strict';

module.exports = (sequelize, DataTypes) => {
  const Setting = sequelize.define(
    'Setting',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      school_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      logo_path: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      receipt_header: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      receipt_footer: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      active_year: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      active_semester: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: 'settings',
      underscored: true,
    }
  );

  return Setting;
};
