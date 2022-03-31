"use strict";
module.exports = (sequelize, DataTypes) => {
  const Contract = sequelize.define(
    "Contract",
    {
      name: { type: DataTypes.STRING, unique: true, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: true },
      userId: { type: DataTypes.INTEGER, allowNull: false },
      startDate: { type: DataTypes.DATE, allowNull: false },
      endDate: { type: DataTypes.DATE, allowNull: false }
    },
    {}
  );
  Contract.associate = function (models) {
    Contract.belongsTo(models.User, {
      as: "user"
    });
  };
  return Contract;
};
