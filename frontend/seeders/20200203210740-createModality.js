"use strict";
const datos = require("../helpers/readModalities");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Modalities", datos, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Modalities", null, {});
  }
};
