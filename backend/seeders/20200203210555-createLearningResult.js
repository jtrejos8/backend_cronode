"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "LearningResults",
      [
        {
          id: 1,
          projectPhase: "Development",
          description: "Learning description test",
          summary: "Learning summary test",
          hours: 12,
          competenceId: 1,
          associatedTrimesters: "3, 4",
          trimesterEvaluate: "3",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("LearningResults", null, {});
  }
};
