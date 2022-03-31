"use strict";
module.exports = (sequelize, DataTypes) => {
  const Zone = sequelize.define(
    "Zone",
    {
      name: { type: DataTypes.STRING, allowNull: false, unique: true }
    },
    {}
  );
  Zone.associate = function(models) {
    Zone.belongsToMany(models.User, {
      through: "UserZones",
      as: "users"
    });
    Zone.hasMany(models.Municipality, {
      as:'municipality'
    });
  };
  return Zone;
};
