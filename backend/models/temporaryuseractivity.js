"use strict";
module.exports = (sequelize, DataTypes) => {
  const TemporaryUserActivity = sequelize.define(
    "TemporaryUserActivity",
    {
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
      observations: { type: DataTypes.STRING, allowNull: true },
      type: { type: DataTypes.STRING, allowNull: false }
    },
    {}
  );
  return TemporaryUserActivity;
};
