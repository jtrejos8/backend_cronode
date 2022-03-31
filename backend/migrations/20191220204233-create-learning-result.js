"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("LearningResults", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      summary: {
        type: Sequelize.STRING,
        allowNull: true
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hours: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      projectPhase: {
        type: Sequelize.STRING,
        allowNull: false
      },
      competenceId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Competences",
            key: "id"
          }
        }
      },
      associatedTrimesters: {
        type: Sequelize.STRING,
        allowNull: false
      },
      trimesterEvaluate: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("LearningResults");
  }
};
