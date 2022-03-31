"use strict";
const datos = require("../helpers/readAmbients");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Ambients", datos, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Ambients", null, {});
  }
};
