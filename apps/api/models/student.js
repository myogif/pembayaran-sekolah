'use strict';

module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    'Student',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      nis: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      class_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      parent: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: 'siswa',
      underscored: true,
    }
  );

  Student.associate = (models) => {
    Student.belongsTo(models.Class, {
      foreignKey: 'class_id',
      as: 'class',
    });
    Student.hasMany(models.Bill, {
      foreignKey: 'student_id',
      as: 'bills',
    });
  };

  return Student;
};
