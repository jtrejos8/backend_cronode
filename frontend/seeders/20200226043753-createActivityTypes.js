"use strict";
const datos = require("../helpers/readActivityTypes");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("TypeActivities", datos, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("TypeActivities", null, {});
  }
};
