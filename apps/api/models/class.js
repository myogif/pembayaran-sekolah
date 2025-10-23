'use strict';

module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define(
    'Class',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      grade: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'kelas',
      underscored: true,
    }
  );

  Class.associate = (models) => {
    Class.hasMany(models.Student, {
      foreignKey: 'class_id',
      as: 'students',
    });
  };

  return Class;
};
