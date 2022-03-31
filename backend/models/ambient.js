"use strict";
module.exports = (sequelize, DataTypes) => {
  const Ambient = sequelize.define(
    "Ambient",
    {
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
      state: { type: DataTypes.STRING, allowNull: false },
      usability: { type: DataTypes.STRING, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: true }
    },
    {}
  );
  Ambient.associate = function (models) {
    Ambient.hasMany(models.Schedule, {
      as: "schedule"
    });
    Ambient.belongsTo(models.User, {
      as: 'user'
    })
  };
  return Ambient;
};
