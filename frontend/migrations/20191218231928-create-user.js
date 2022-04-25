"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      misena_email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      institutional_email: {
        allowNull: true,
        unique: true,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      document: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      birthdate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      phone: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      phone_ip: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      gender: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      positionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Positions",
            key: "id",
          },
        },
      },
      rolId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Rols",
            key: "id",
          },
        },
      },
      contractTypeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "ContractTypes",
            key: "id",
          },
        },
      },
      profession: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      grade: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      isBossArea: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      last_academic_level: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      photo: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      token:{
        allowNull:true,
        type: Sequelize.STRING
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: "Activo",
      },
      email_state: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Users");
  },
};
