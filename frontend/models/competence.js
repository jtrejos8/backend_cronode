"use strict";
module.exports = (sequelize, DataTypes) => {
  const Competence = sequelize.define(
    "Competence",
    {
      formationProgramId: { type: DataTypes.INTEGER, allowNull: false, },
      code: { type: DataTypes.STRING, allowNull: true },
      description: { type: DataTypes.STRING, allowNull: false },
      summary: { type: DataTypes.STRING, allowNull: false },
      hours: { type: DataTypes.INTEGER, allowNull: true }
    },
    {}
  );
  Competence.associate = function (models) {
    Competence.belongsTo(models.FormationProgram, {
      as: 'formationProgram'
    })
  };
  return Competence;
};
