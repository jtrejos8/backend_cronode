"use strict";
const datos = require("../helpers/readDeprogrammingReasons");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("DeprogrammingReasons", datos, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("DeprogrammingReasons", null, {});
  }
};
