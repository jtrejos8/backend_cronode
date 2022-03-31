'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification', {
    userId: {type: DataTypes.INTEGER, allowNull: false},
    state: {type: DataTypes.STRING, allowNull:false},
    title: {type: DataTypes.STRING, allowNull:false},
    description: {type: DataTypes.STRING, allowNull:false},
    type: {type: DataTypes.STRING, allowNull:false}
  }, {});
  Notification.associate = function(models) {
    // associations can be defined here
  };
  return Notification;
};