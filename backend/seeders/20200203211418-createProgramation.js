"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    let today = new Date();
    let end = new Date(today.getFullYear(),today.getMonth()+2, today.getDate());
    return queryInterface.bulkInsert(
      "Programations",
      [
        {
          id: 1,
          startDate: new Date(),
          endDate: end,
          trimester: 3,
          groupId: 1,
          municipalityId: 1,
          isActive:true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Programations", null, {});
  }
};
