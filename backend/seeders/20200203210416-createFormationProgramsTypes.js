"use strict";
const datos = require("../helpers/readFormationProgramTypes");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("FormationProgramTypes", datos, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("FormationProgramTypes", null, {});
  }
};
