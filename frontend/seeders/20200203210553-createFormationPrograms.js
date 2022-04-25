"use strict";
const datos = require("../helpers/readFormationPrograms");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("FormationPrograms", datos, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("FormationPrograms", null, {});
  }
};
