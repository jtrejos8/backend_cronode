"use strict";
module.exports = (sequelize, DataTypes) => {
  const LearningResult = sequelize.define(
    "LearningResult",
    {
      summary: { type: DataTypes.STRING, allowNull: true },
      description: { type: DataTypes.STRING, allowNull: false },
      hours: { type: DataTypes.INTEGER, allowNull: false },
      projectPhase: { type: DataTypes.STRING, allowNull: false },
      competenceId: { type: DataTypes.INTEGER, allowNull: false },
      associatedTrimesters: { type: DataTypes.STRING, allowNull: false },
      trimesterEvaluate: { type: DataTypes.INTEGER, allowNull: false }
    },
    {}
  );
  LearningResult.associate = function(models) {
    LearningResult.belongsTo(models.Competence, {
      as: "competence"
    });
    LearningResult.belongsToMany(models.Programation, {
      through: "ProgramationLearningResults",
      as: "programation"
    });
  };
  return LearningResult;
};
