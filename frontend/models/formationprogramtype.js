"use strict";
module.exports = (sequelize, DataTypes) => {
  const FormationProgramType = sequelize.define(
    "FormationProgramType",
    {
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
      electiveMonths: { type: DataTypes.INTEGER, allowNull: false },
      practiceMonths: { type: DataTypes.INTEGER, allowNull: false }
    },
    {}
  );
  FormationProgramType.associate = function(models) {
    // associations can be defined here
  };
  return FormationProgramType;
};
