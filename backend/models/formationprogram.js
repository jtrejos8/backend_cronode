"use strict";
module.exports = (sequelize, DataTypes) => {
  const FormationProgram = sequelize.define(
    "FormationProgram",
    {
      code: { type: DataTypes.STRING, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
      formationTypeId: { type: DataTypes.INTEGER, allowNull: false },
      responsibleAreaId: { type: DataTypes.INTEGER, allowNull: true },
      isRegisterQualified: { type: DataTypes.BOOLEAN },
      isRegisterQualifiedDate: { type: DataTypes.DATE, allowNull: true },
    },
    {}
  );
  FormationProgram.associate = function (models) {
    FormationProgram.belongsTo(models.FormationProgramType, {
      as: "formationType",
    });
    FormationProgram.belongsTo(models.User, {
      as: "responsibleArea",
    });
  };
  return FormationProgram;
};
