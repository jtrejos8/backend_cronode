"use strict";
const data = require("../helpers/readUsers");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("UserZones", data.usersZones, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("UserZones", null, {});
  }
};
