"use strict";
const datos = require("../helpers/readZones");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Zones", datos, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Zones", null, {});
  }
};
