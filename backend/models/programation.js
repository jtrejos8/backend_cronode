"use strict";
module.exports = (sequelize, DataTypes) => {
  const Programation = sequelize.define(
    "Programation",
    {
      startDate: { type: DataTypes.DATE, allowNull: false },
      endDate: { type: DataTypes.DATE, allowNull: false },
      trimester: { type: DataTypes.INTEGER, allowNull: false },
      groupId: { type: DataTypes.INTEGER, allowNull: false },
      municipalityId: { type: DataTypes.INTEGER, allowNull: false },
      isActive: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false }
    },
    {}
  );
  Programation.associate = function (models) {
    Programation.belongsTo(models.Group, {
      as: "group"
    });
    Programation.belongsTo(models.Municipality, {
      as: "municipality"
    });
    Programation.belongsToMany(models.LearningResult, {
      through: "ProgramationLearningResults",
      as: "results"
    });
    Programation.hasMany(models.Schedule, {
      as: "schedule"
    });
  };
  return Programation;
};
