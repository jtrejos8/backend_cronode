"use strict";
const datos = require("../helpers/readMunicipalities");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Municipalities", datos, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Municipalities", null, {});
  }
};
