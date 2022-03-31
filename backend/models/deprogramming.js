'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deprogramming = sequelize.define('Deprogramming', {
    scheduleId: { type: DataTypes.INTEGER, allowNull: false },
    date: { type: DataTypes.DATE, allowNull: false },
    deprogrammingReasonId: { type: DataTypes.INTEGER, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: true }
  }, {});
  Deprogramming.associate = function (models) {
    Deprogramming.belongsTo(models.Schedule, {
      as: 'schedule'
    });
    Deprogramming.belongsTo(models.DeprogrammingReason, {
      as: 'deprogrammingReason'
    })
  };
  return Deprogramming;
};