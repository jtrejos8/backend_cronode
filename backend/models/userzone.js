"use strict";
module.exports = (sequelize, DataTypes) => {
  const UserZone = sequelize.define(
    "UserZone",
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      zoneId: { type: DataTypes.INTEGER, allowNull: false }
    },
    {}
  );
  UserZone.associate = function(models) {};
  return UserZone;
};
