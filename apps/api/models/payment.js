'use strict';

module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define(
    'Payment',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      tagihan_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      staff_id: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      payment_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      method: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      remarks: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: 'pembayaran',
      underscored: true,
    }
  );

  Payment.associate = (models) => {
    Payment.belongsTo(models.Bill, {
      foreignKey: 'tagihan_id',
      as: 'bill',
    });
    Payment.belongsTo(models.User, {
      foreignKey: 'staff_id',
      as: 'staff',
    });
  };

  return Payment;
};
