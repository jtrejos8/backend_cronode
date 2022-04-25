"use strict";
const datos = require("../helpers/readPositions");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Positions", datos, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Positions", null, {});
  }
};
