"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Groups",
      [
        {
          id: 1,
          codeTab: "21312",
          modalityId: 1,
          quantityLearners: 30,
          activeLearners: 15,
          electiveStartDate: new Date(),
          electiveEndDate: new Date(),
          practiceStartDate: new Date(),
          practiceEndDate: new Date(),
          managerId: 68,
          formationProgramId: 1,
          groupState: "Active",
          offer: "Offer test",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Groups", null, {});
  }
};
