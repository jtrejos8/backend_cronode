"use strict";
module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define(
    "Schedule",
    {
      type: { type: DataTypes.STRING, allowNull: false },
      state: { type: DataTypes.STRING, allowNull: false },
      day: { type: DataTypes.STRING, allowNull: true },
      startDate: { type: DataTypes.DATE, allowNull: false },
      endDate: { type: DataTypes.DATE, allowNull: false },
      learningResultId: { type: DataTypes.INTEGER, allowNull: true },
      summary: { type: DataTypes.STRING, allowNull: false },
      ambientId: { type: DataTypes.INTEGER, allowNull: true },
      programationId: { type: DataTypes.INTEGER, allowNull: true },
      constantUserId: { type: DataTypes.INTEGER, allowNull: true },
      temporaryUserId: { type: DataTypes.INTEGER, allowNull: true },
      periodicityId: { type: DataTypes.INTEGER, allowNull: true },
    },
    {}
  );
  Schedule.associate = function (models) {
    Schedule.belongsTo(models.LearningResult, {
      as: "learningResult",
    });
    Schedule.belongsTo(models.Ambient, {
      as: "ambient",
    });
    Schedule.belongsTo(models.Programation, {
      as: "programation",
    });
    Schedule.belongsTo(models.TemporaryUserActivity, {
      as: "temporaryUser",
    });
    Schedule.belongsTo(models.User, {
      as: "constantUser",
    });
    Schedule.hasMany(models.Deprogramming, {
      as: "deprogramming",
    });
  };
  return Schedule;
};
