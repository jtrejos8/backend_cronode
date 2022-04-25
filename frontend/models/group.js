"use strict";
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define(
    "Group",
    {
      codeTab: { type: DataTypes.INTEGER, unique: true, allowNull: false },
      modalityId: { type: DataTypes.INTEGER, allowNull: false },
      quantityLearners: { type: DataTypes.INTEGER, allowNull: false },
      activeLearners: { type: DataTypes.INTEGER, allowNull: false },
      electiveStartDate: { type: DataTypes.DATE, allowNull: false },
      electiveEndDate: { type: DataTypes.DATE, allowNull: false },
      practiceStartDate: { type: DataTypes.DATE, allowNull: false },
      practiceEndDate: { type: DataTypes.DATE, allowNull: false },
      offer: { type: DataTypes.STRING, allowNull: false },
      managerId: { type: DataTypes.INTEGER, allowNull: false },
      formationProgramId: { type: DataTypes.INTEGER, allowNull: false },
      learnerId:{type: DataTypes.INTEGER, allowNull:true},
      groupState: { type: DataTypes.STRING, allowNull: false }
    },
    {}
  );
  Group.associate = function(models) {
    Group.belongsTo(models.Modality, {
      as: "modality"
    });
    Group.belongsTo(models.User, {
      as: "manager"
    });
    Group.belongsTo(models.FormationProgram, {
      as: "formationProgram"
    });
    Group.belongsTo(models.User, {
      as: "learner"
    });
    Group.hasMany(models.Programation, {
      as: "programation"
    });
  };
  return Group;
};
