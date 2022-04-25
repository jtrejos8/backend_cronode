"use strict";
module.exports = (sequelize, DataTypes) => {
  const Municipality = sequelize.define(
    "Municipality",
    {
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
      zoneId: { type: DataTypes.INTEGER, allowNull: false }
    },
    {}
  );
  Municipality.associate = function(models) {
    Municipality.belongsTo(models.Zone, {
      as: "zone"
    });
    Municipality.hasMany(models.Programation, {
      as:'programation'
    });
  };
  return Municipality;
};
