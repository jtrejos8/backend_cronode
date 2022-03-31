"use strict";
module.exports = (sequelize, DataTypes) => {
  const Position = sequelize.define(
    "Position",
    {
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
      type: { type: DataTypes.STRING, allowNull: false }
    },
    {}
  );
  Position.associate = function(models) {
    // associations can be defined here
  };
  return Position;
};
