"use strict";
module.exports = (sequelize, DataTypes) => {
  const OtherActivity = sequelize.define(
    "OtherActivity",
    {
      name: { type: DataTypes.STRING, allowNull: false },
      typeActivityId: { type: DataTypes.INTEGER, allowNull: false },
      day: { type: DataTypes.STRING, allowNull: false },
      startDate: { type: DataTypes.DATE, allowNull: false },
      endDate: { type: DataTypes.DATE, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false }
    },
    {}
  );
  OtherActivity.associate = function(models) {
    OtherActivity.belongsTo(models.TypeActivity, {
      as: "typeActivity"
    });
    OtherActivity.belongsTo(models.User, {
      as: "user"
    });
  };
  return OtherActivity;
};
