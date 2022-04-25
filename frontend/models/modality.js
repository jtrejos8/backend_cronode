"use strict";
module.exports = (sequelize, DataTypes) => {
  const Modality = sequelize.define(
    "Modality",
    {
      name: { type: DataTypes.STRING, allowNull: false, unique: true }
    },
    {}
  );
  Modality.associate = function(models) {
    // associations can be defined here
  };
  return Modality;
};
