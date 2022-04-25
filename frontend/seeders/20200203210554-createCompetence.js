"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Competences",
      [
        {
          formationProgramId: 1,
          id: 1,
          code: "213123",
          description: "Competence description test",
          summary: "Compentence summary test",
          hours: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Competences", null, {});
  }
};
