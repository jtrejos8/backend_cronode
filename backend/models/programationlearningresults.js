"use strict";
module.exports = (sequelize, DataTypes) => {
  const ProgramationLearningResults = sequelize.define(
    "ProgramationLearningResults",
    {
      ProgramationId: { type: DataTypes.INTEGER, allowNull: false },
      LearningResultId: { type: DataTypes.INTEGER, allowNull: false },
      state: { type: DataTypes.STRING, allowNull: true },
      observations: { type: DataTypes.STRING, allowNull: true }
    },
    {}
  );
  ProgramationLearningResults.associate = function(models) {
    // associations can be defined here
  };
  return ProgramationLearningResults;
};
