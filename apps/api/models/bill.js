'use strict';

module.exports = (sequelize, DataTypes) => {
  const Bill = sequelize.define(
    'Bill',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      student_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      month: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('BELUM', 'LUNAS', 'TUNDA'),
        allowNull: false,
        defaultValue: 'BELUM',
      },
    },
    {
      tableName: 'tagihan',
      underscored: true,
    }
  );

  Bill.associate = (models) => {
    Bill.belongsTo(models.Student, {
      foreignKey: 'student_id',
      as: 'student',
    });
    Bill.hasMany(models.Payment, {
      foreignKey: 'tagihan_id',
      as: 'payments',
    });
  };

  return Bill;
};
