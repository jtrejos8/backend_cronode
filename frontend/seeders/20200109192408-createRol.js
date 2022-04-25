"use strict";
const datos = require("../helpers/readRols");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Rols", datos, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Rols", null, {});
  }
};
