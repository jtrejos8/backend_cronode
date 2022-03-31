"use strict";
module.exports = (sequelize, DataTypes) => {
  const TypeActivity = sequelize.define(
    "TypeActivity",
    {
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
      color: { type: DataTypes.STRING, allowNull: true }
    },
    {}
  );
  TypeActivity.associate = function(models) {
    // associations can be defined here
  };
  return TypeActivity;
};
