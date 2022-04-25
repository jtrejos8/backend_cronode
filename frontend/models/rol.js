"use strict";
module.exports = (sequelize, DataTypes) => {
  const Rol = sequelize.define(
    "Rol",
    {
      name: { type: DataTypes.STRING, unique: true, allowNull: false }
    },
    {}
  );
  Rol.associate = function(models) {
    // associations can be defined here
  };
  return Rol;
};
