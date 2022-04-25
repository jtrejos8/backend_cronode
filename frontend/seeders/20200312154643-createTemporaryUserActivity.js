"use strict";
const datos = require("../helpers/readTemporaryUserActivity");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("TemporaryUserActivities", datos, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("TemporaryUserActivities", null, {});
  }
};
