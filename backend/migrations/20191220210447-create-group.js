"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Groups", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            codeTab: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true
            },
            modalityId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: {
                        tableName: "Modalities",
                        key: "id"
                    }
                }
            },
            quantityLearners: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            activeLearners: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            electiveStartDate: {
                type: Sequelize.DATE,
                allowNull: false
            },
            electiveEndDate: {
                type: Sequelize.DATE,
                allowNull: false
            },
            practiceStartDate: {
                type: Sequelize.DATE,
                allowNull: false
            },
            practiceEndDate: {
                type: Sequelize.DATE,
                allowNull: false
            },
            offer: {
                type: Sequelize.STRING,
                allowNull: false
            },
            managerId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: {
                        tableName: "Users",
                        key: "id"
                    }
                }
            },
            formationProgramId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: {
                        tableName: "FormationPrograms",
                        key: "id"
                    }
                }
            },
            learnerId: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        tableName: 'Users',
                        key: 'id'
                    }
                }
            },
            groupState: {
                type: Sequelize.STRING,
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
        return queryInterface.dropTable("Groups");
    }
};