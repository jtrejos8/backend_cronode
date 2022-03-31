'use strict';
module.exports = (sequelize, DataTypes) => {
  const DeprogrammingReason = sequelize.define('DeprogrammingReason', {
    name: { type: DataTypes.STRING, allowNull: false, unique: true }
  }, {});
  DeprogrammingReason.associate = function (models) {
    // associations can be defined here
  };
  return DeprogrammingReason;
};