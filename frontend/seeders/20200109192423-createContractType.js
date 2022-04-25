"use strict";
const datos = require("../helpers/readContractTypes");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("ContractTypes", datos, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ContractTypes", null, {});
  }
};
