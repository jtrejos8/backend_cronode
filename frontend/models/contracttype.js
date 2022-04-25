"use strict";
module.exports = (sequelize, DataTypes) => {
  const ContractType = sequelize.define(
    "ContractType",
    {
      name: { type: DataTypes.STRING, allowNull: false, unique: true }
    },
    {}
  );
  ContractType.associate = function(models) {
    // associations can be defined here
  };
  return ContractType;
};
