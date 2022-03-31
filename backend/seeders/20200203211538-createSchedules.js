"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    let today = new Date();
    return queryInterface
      .bulkInsert(
        "Schedules",
        [{
          type: "Horario",
          state: "Aprobado",
          day: "Lunes",
          startDate: new Date(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} 7:0`),
          endDate: new Date(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} 9:30`),
          learningResultId: 1,
          ambientId: 1,
          programationId: 1,
          constantUserId: 4,
          summary: "Summary schedules test",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          type: "Horario",
          state: "Aprobado",
          day: "Lunes",
          startDate: new Date(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} 10:0`),
          endDate: new Date(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} 12:30`),
          learningResultId: 1,
          ambientId: 1,
          programationId: 1,
          constantUserId: 4,
          summary: "Summary schedules test",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          type: "Horario",
          state: "Aprobado",
          day: "Lunes",
          startDate: new Date(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} 14:0`),
          endDate: new Date(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} 17:30`),
          learningResultId: 1,
          ambientId: 1,
          programationId: 1,
          constantUserId: 4,
          summary: "Summary schedules test",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Horario",
          state: "Aprobado",
          day: "Martes",
          startDate: new Date(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} 7:0`),
          endDate: new Date(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} 8:30`),
          learningResultId: 1,
          ambientId: 1,
          programationId: 1,
          constantUserId: 4,
          summary: "Summary schedules test",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Horario",
          state: "Aprobado",
          day: "Martes",
          startDate: new Date(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} 8:30`),
          endDate: new Date(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} 10:30`),
          learningResultId: 1,
          ambientId: 1,
          programationId: 1,
          constantUserId: 4,
          summary: "Summary schedules test",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          type: "Horario",
          state: "Aprobado",
          day: "Martes",
          startDate: new Date(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} 11:0`),
          endDate: new Date(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} 13:30`),
          learningResultId: 1,
          ambientId: 1,
          programationId: 1,
          constantUserId: 4,
          summary: "Summary schedules test",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Horario",
          state: "Aprobado",
          day: "Jueves",
          startDate: new Date(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} 13:0`),
          endDate: new Date(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} 22:00`),
          learningResultId: 1,
          ambientId: 1,
          programationId: 1,
          constantUserId: 4,
          summary: "Summary schedules test",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Horario",
          state: "Aprobado",
          day: "Viernes",
          startDate: new Date(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} 13:0`),
          endDate: new Date(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} 22:00`),
          learningResultId: 1,
          ambientId: 1,
          programationId: 1,
          constantUserId: 4,
          summary: "Summary schedules test",
          createdAt: new Date(),
          updatedAt: new Date()
        }], {}
      )
      .catch(err => console.log(err));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Schedules", null, {});
  }
};