'use strict';
module.exports = (sequelize, DataTypes) => {
  const Periodicity = sequelize.define('Periodicity', {
    name: { type: DataTypes.STRING, allowNull: false, unique: true }
  }, {});
  Periodicity.associate = function (models) {
    // associations can be defined here
  };
  return Periodicity;
};